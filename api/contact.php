<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://luvant.com.ar');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Configuración del servidor no encontrada']);
    exit;
}
require_once $configPath;

$logFile = __DIR__ . '/smtp_debug.log';

function smtpLog(string $msg) {
    global $logFile;
    file_put_contents($logFile, date('[Y-m-d H:i:s] ') . $msg . "\n", FILE_APPEND);
}

// Read full SMTP response (handles multi-line responses)
function smtpRead($socket): string {
    $response = '';
    while ($line = fgets($socket, 512)) {
        $response .= $line;
        smtpLog("<<< " . trim($line));
        // Last line of multi-line response: code followed by space (not dash)
        if (isset($line[3]) && $line[3] === ' ') break;
        // Single line response (less than 4 chars)
        if (strlen($line) < 4) break;
    }
    return $response;
}

function smtpCode(string $response): string {
    return substr($response, 0, 3);
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Datos inválidos']);
    exit;
}

// --- Anti-spam ---
if (!empty($input['website'])) { echo json_encode(['ok' => true]); exit; }

$timestamp = intval($input['_t'] ?? 0);
if ($timestamp > 0 && (time() - $timestamp) < 3) { echo json_encode(['ok' => true]); exit; }

$name    = trim($input['name'] ?? '');
$email   = trim($input['email'] ?? '');
$message = trim($input['message'] ?? '');
$company = trim($input['company'] ?? '');
$phone   = trim($input['phone'] ?? '');
$services = $input['services'] ?? [];

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Nombre, email y mensaje son obligatorios']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit;
}
if (preg_match_all('/https?:\/\//i', $message) > 2) { echo json_encode(['ok' => true]); exit; }

$rateLimitDir = sys_get_temp_dir() . '/luvant_contact_rate';
if (!is_dir($rateLimitDir)) @mkdir($rateLimitDir, 0755, true);
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitFile = $rateLimitDir . '/' . md5($ip);
if (file_exists($rateLimitFile) && (time() - intval(file_get_contents($rateLimitFile))) < 60) {
    http_response_code(429);
    echo json_encode(['error' => 'Esperá un momento antes de enviar otro mensaje']);
    exit;
}
file_put_contents($rateLimitFile, time());

// --- Build email ---
$servicesText = is_array($services) && count($services) > 0
    ? implode(', ', array_map('htmlspecialchars', $services))
    : 'No especificado';

$body = "<html><body style=\"font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#333;max-width:600px\">
<h2 style=\"color:#111;border-bottom:2px solid #eee;padding-bottom:12px\">Nuevo contacto desde luvant.com.ar</h2>
<table style=\"width:100%;border-collapse:collapse\">
<tr><td style=\"padding:8px 0;color:#666;width:120px\">Nombre</td><td style=\"padding:8px 0;font-weight:600\">" . htmlspecialchars($name) . "</td></tr>
<tr><td style=\"padding:8px 0;color:#666\">Email</td><td style=\"padding:8px 0\"><a href=\"mailto:" . htmlspecialchars($email) . "\">" . htmlspecialchars($email) . "</a></td></tr>"
. ($company ? "<tr><td style=\"padding:8px 0;color:#666\">Empresa</td><td style=\"padding:8px 0\">" . htmlspecialchars($company) . "</td></tr>" : "")
. ($phone ? "<tr><td style=\"padding:8px 0;color:#666\">Teléfono</td><td style=\"padding:8px 0\">" . htmlspecialchars($phone) . "</td></tr>" : "")
. "<tr><td style=\"padding:8px 0;color:#666\">Servicios</td><td style=\"padding:8px 0\">" . $servicesText . "</td></tr>
</table>
<div style=\"margin-top:20px;padding:16px;background:#f9f9f9;border-radius:8px;border-left:3px solid #111\">
<p style=\"margin:0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:1px\">Mensaje</p>
<p style=\"margin:8px 0 0;line-height:1.6\">" . nl2br(htmlspecialchars($message)) . "</p>
</div>
<p style=\"margin-top:24px;font-size:12px;color:#999\">Enviado el " . date('d/m/Y H:i') . " · IP: " . htmlspecialchars($ip) . "</p>
</body></html>";

// --- Send via SMTP ---
$subject = "Nuevo contacto: " . $name;
smtpLog("=== Nuevo envío: {$name} <{$email}> ===");

$result = sendSmtp(MAIL_TO, $subject, $body, $email, MAIL_CC);

if ($result === true) {
    smtpLog("RESULTADO: OK");
    echo json_encode(['ok' => true]);
} else {
    smtpLog("RESULTADO: FALLO - " . $result);
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo enviar el mensaje. Intentá de nuevo o escribí a hola@luvant.com.ar', 'debug' => $result]);
}

function sendSmtp(string $to, string $subject, string $htmlBody, string $replyTo, string $cc = '') {
    smtpLog("Conectando a ssl://" . SMTP_HOST . ":" . SMTP_PORT);

    $ctx = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
    $socket = @stream_socket_client('ssl://' . SMTP_HOST . ':' . SMTP_PORT, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx);

    if (!$socket) {
        return "Conexión fallida: [{$errno}] {$errstr}";
    }

    stream_set_timeout($socket, 10);

    // 220 Banner
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '220') { fclose($socket); return "Banner: " . trim($resp); }

    // EHLO
    fwrite($socket, "EHLO luvant.com.ar\r\n");
    smtpLog(">>> EHLO luvant.com.ar");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '250') { fclose($socket); return "EHLO: " . trim($resp); }

    // AUTH LOGIN
    fwrite($socket, "AUTH LOGIN\r\n");
    smtpLog(">>> AUTH LOGIN");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '334') { fclose($socket); return "AUTH: " . trim($resp); }

    // Username
    fwrite($socket, base64_encode(SMTP_USER) . "\r\n");
    smtpLog(">>> [user]");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '334') { fclose($socket); return "USER: " . trim($resp); }

    // Password
    fwrite($socket, base64_encode(SMTP_PASS) . "\r\n");
    smtpLog(">>> [pass]");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '235') { fclose($socket); return "PASS: " . trim($resp); }

    // MAIL FROM
    fwrite($socket, "MAIL FROM:<" . SMTP_FROM . ">\r\n");
    smtpLog(">>> MAIL FROM:<" . SMTP_FROM . ">");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '250') { fclose($socket); return "FROM: " . trim($resp); }

    // RCPT TO
    fwrite($socket, "RCPT TO:<{$to}>\r\n");
    smtpLog(">>> RCPT TO:<{$to}>");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '250') { fclose($socket); return "RCPT: " . trim($resp); }

    // RCPT CC
    if ($cc) {
        fwrite($socket, "RCPT TO:<{$cc}>\r\n");
        smtpLog(">>> RCPT TO:<{$cc}>");
        $resp = smtpRead($socket);
        smtpLog("CC resp: " . smtpCode($resp));
    }

    // DATA
    fwrite($socket, "DATA\r\n");
    smtpLog(">>> DATA");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '354') { fclose($socket); return "DATA: " . trim($resp); }

    // Email content
    $msgId = md5(uniqid((string)time()));
    $msg  = "From: " . SMTP_FROM_NAME . " <" . SMTP_FROM . ">\r\n";
    $msg .= "Reply-To: {$replyTo}\r\n";
    $msg .= "To: {$to}\r\n";
    if ($cc) $msg .= "Cc: {$cc}\r\n";
    $msg .= "Subject: {$subject}\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: text/html; charset=UTF-8\r\n";
    $msg .= "Date: " . date('r') . "\r\n";
    $msg .= "Message-ID: <{$msgId}@luvant.com.ar>\r\n";
    $msg .= "\r\n" . $htmlBody . "\r\n.\r\n";

    fwrite($socket, $msg);
    smtpLog(">>> [message sent]");
    $resp = smtpRead($socket);
    $ok = (smtpCode($resp) === '250');

    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    return $ok ? true : "SEND: " . trim($resp);
}

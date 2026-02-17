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

// Load SMTP config
$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Configuración del servidor no encontrada']);
    exit;
}
require_once $configPath;

// Log file for debugging
$logFile = __DIR__ . '/smtp_debug.log';

function smtpLog(string $msg) {
    global $logFile;
    file_put_contents($logFile, date('[Y-m-d H:i:s] ') . $msg . "\n", FILE_APPEND);
}

// Parse JSON body
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Datos inválidos']);
    exit;
}

// --- Anti-spam checks ---

if (!empty($input['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$timestamp = intval($input['_t'] ?? 0);
if ($timestamp > 0 && (time() - $timestamp) < 3) {
    echo json_encode(['ok' => true]);
    exit;
}

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

if (preg_match_all('/https?:\/\//i', $message) > 2) {
    echo json_encode(['ok' => true]);
    exit;
}

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

// --- Build email body ---

$servicesText = is_array($services) && count($services) > 0
    ? implode(', ', array_map('htmlspecialchars', $services))
    : 'No especificado';

$body = "
<html>
<body style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #333; max-width: 600px;\">
<h2 style=\"color: #111; border-bottom: 2px solid #eee; padding-bottom: 12px;\">Nuevo contacto desde luvant.com.ar</h2>
<table style=\"width: 100%; border-collapse: collapse;\">
<tr><td style=\"padding: 8px 0; color: #666; width: 120px;\">Nombre</td><td style=\"padding: 8px 0; font-weight: 600;\">" . htmlspecialchars($name) . "</td></tr>
<tr><td style=\"padding: 8px 0; color: #666;\">Email</td><td style=\"padding: 8px 0;\"><a href=\"mailto:" . htmlspecialchars($email) . "\">" . htmlspecialchars($email) . "</a></td></tr>"
. ($company ? "<tr><td style=\"padding: 8px 0; color: #666;\">Empresa</td><td style=\"padding: 8px 0;\">" . htmlspecialchars($company) . "</td></tr>" : "")
. ($phone ? "<tr><td style=\"padding: 8px 0; color: #666;\">Teléfono</td><td style=\"padding: 8px 0;\">" . htmlspecialchars($phone) . "</td></tr>" : "")
. "<tr><td style=\"padding: 8px 0; color: #666;\">Servicios</td><td style=\"padding: 8px 0;\">" . $servicesText . "</td></tr>
</table>
<div style=\"margin-top: 20px; padding: 16px; background: #f9f9f9; border-radius: 8px; border-left: 3px solid #111;\">
<p style=\"margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;\">Mensaje</p>
<p style=\"margin: 8px 0 0; line-height: 1.6;\">" . nl2br(htmlspecialchars($message)) . "</p>
</div>
<p style=\"margin-top: 24px; font-size: 12px; color: #999;\">
Enviado el " . date('d/m/Y H:i') . " · IP: " . htmlspecialchars($ip) . "
</p>
</body>
</html>";

// --- Send via SMTP ---

$subject = "Nuevo contacto: " . $name;

smtpLog("=== Nuevo envío: {$name} <{$email}> ===");

$result = sendSmtp(MAIL_TO, $subject, $body, $email, MAIL_CC);

if ($result === true) {
    smtpLog("RESULTADO: OK - Email enviado");
    echo json_encode(['ok' => true]);
} else {
    smtpLog("RESULTADO: FALLO - " . $result);
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo enviar el mensaje. Intentá de nuevo o escribí a hola@luvant.com.ar', 'debug' => $result]);
}

// --- SMTP function with logging ---

function sendSmtp(string $to, string $subject, string $htmlBody, string $replyTo, string $cc = '') {
    smtpLog("Conectando a ssl://" . SMTP_HOST . ":" . SMTP_PORT);

    $socket = @stream_socket_client(
        'ssl://' . SMTP_HOST . ':' . SMTP_PORT,
        $errno, $errstr, 15,
        STREAM_CLIENT_CONNECT,
        stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]])
    );

    if (!$socket) {
        smtpLog("ERROR conexión: [{$errno}] {$errstr}");
        return "Conexión fallida: [{$errno}] {$errstr}";
    }

    $resp = fgets($socket, 512);
    smtpLog("CONNECT: " . trim($resp));
    if (substr($resp, 0, 3) !== '220') { fclose($socket); return "Banner inesperado: " . trim($resp); }

    fwrite($socket, "EHLO luvant.com.ar\r\n");
    smtpLog(">>> EHLO luvant.com.ar");
    while ($line = fgets($socket, 512)) {
        smtpLog("<<< " . trim($line));
        if (substr($line, 3, 1) === ' ') break;
    }

    fwrite($socket, "AUTH LOGIN\r\n");
    smtpLog(">>> AUTH LOGIN");
    $resp = fgets($socket, 512);
    smtpLog("<<< " . trim($resp));
    if (substr($resp, 0, 3) !== '334') { fclose($socket); return "AUTH no soportado: " . trim($resp); }

    fwrite($socket, base64_encode(SMTP_USER) . "\r\n");
    smtpLog(">>> [usuario]");
    $resp = fgets($socket, 512);
    smtpLog("<<< " . trim($resp));
    if (substr($resp, 0, 3) !== '334') { fclose($socket); return "Usuario rechazado: " . trim($resp); }

    fwrite($socket, base64_encode(SMTP_PASS) . "\r\n");
    smtpLog(">>> [contraseña]");
    $resp = fgets($socket, 512);
    smtpLog("<<< " . trim($resp));
    if (substr($resp, 0, 3) !== '235') { fclose($socket); return "Auth fallido: " . trim($resp); }

    fwrite($socket, "MAIL FROM:<" . SMTP_FROM . ">\r\n");
    smtpLog(">>> MAIL FROM:<" . SMTP_FROM . ">");
    $resp = fgets($socket, 512);
    smtpLog("<<< " . trim($resp));
    if (substr($resp, 0, 3) !== '250') { fclose($socket); return "MAIL FROM rechazado: " . trim($resp); }

    fwrite($socket, "RCPT TO:<{$to}>\r\n");
    smtpLog(">>> RCPT TO:<{$to}>");
    $resp = fgets($socket, 512);
    smtpLog("<<< " . trim($resp));
    if (substr($resp, 0, 3) !== '250') { fclose($socket); return "RCPT TO rechazado: " . trim($resp); }

    if ($cc) {
        fwrite($socket, "RCPT TO:<{$cc}>\r\n");
        smtpLog(">>> RCPT TO:<{$cc}>");
        $resp = fgets($socket, 512);
        smtpLog("<<< " . trim($resp));
    }

    fwrite($socket, "DATA\r\n");
    smtpLog(">>> DATA");
    $resp = fgets($socket, 512);
    smtpLog("<<< " . trim($resp));
    if (substr($resp, 0, 3) !== '354') { fclose($socket); return "DATA rechazado: " . trim($resp); }

    $msgId = md5(uniqid(time()));
    $headers = "From: " . SMTP_FROM_NAME . " <" . SMTP_FROM . ">\r\n";
    $headers .= "Reply-To: {$replyTo}\r\n";
    $headers .= "To: {$to}\r\n";
    if ($cc) $headers .= "Cc: {$cc}\r\n";
    $headers .= "Subject: {$subject}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Date: " . date('r') . "\r\n";
    $headers .= "Message-ID: <{$msgId}@luvant.com.ar>\r\n";

    fwrite($socket, $headers . "\r\n" . $htmlBody . "\r\n.\r\n");
    smtpLog(">>> [headers + body + .]");
    $resp = fgets($socket, 512);
    smtpLog("<<< " . trim($resp));
    $success = (substr($resp, 0, 3) === '250');

    fwrite($socket, "QUIT\r\n");
    smtpLog(">>> QUIT");
    fclose($socket);

    return $success ? true : "DATA final rechazado: " . trim($resp);
}

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

function smtpRead($socket): string {
    $response = '';
    while ($line = fgets($socket, 512)) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') break;
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
$elapsed = time() - $timestamp;
if ($timestamp > 0 && $elapsed >= 0 && $elapsed < 3) { echo json_encode(['ok' => true]); exit; }

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

$safeName    = htmlspecialchars($name);
$safeEmail   = htmlspecialchars($email);
$safeCompany = htmlspecialchars($company);
$safePhone   = htmlspecialchars($phone);
$safeMessage = nl2br(htmlspecialchars($message));
$safeIp      = htmlspecialchars($ip);
$dateStr     = date('d/m/Y H:i');
$year        = date('Y');

$contactRows = "
<tr>
  <td style=\"padding:14px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#737373;width:110px;vertical-align:top\">Nombre</td>
  <td style=\"padding:14px 16px;font-size:15px;color:#111111;font-weight:500\">{$safeName}</td>
</tr>
<tr><td colspan=\"2\" style=\"border-bottom:1px solid #e5e5e5\"></td></tr>
<tr>
  <td style=\"padding:14px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#737373;vertical-align:top\">Email</td>
  <td style=\"padding:14px 16px;font-size:15px\"><a href=\"mailto:{$safeEmail}\" style=\"color:#111111;text-decoration:none;border-bottom:1px solid #d4d4d4\">{$safeEmail}</a></td>
</tr>";

if ($company) {
    $contactRows .= "
<tr><td colspan=\"2\" style=\"border-bottom:1px solid #e5e5e5\"></td></tr>
<tr>
  <td style=\"padding:14px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#737373;vertical-align:top\">Empresa</td>
  <td style=\"padding:14px 16px;font-size:15px;color:#111111\">{$safeCompany}</td>
</tr>";
}
if ($phone) {
    $contactRows .= "
<tr><td colspan=\"2\" style=\"border-bottom:1px solid #e5e5e5\"></td></tr>
<tr>
  <td style=\"padding:14px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#737373;vertical-align:top\">Teléfono</td>
  <td style=\"padding:14px 16px;font-size:15px;color:#111111\">{$safePhone}</td>
</tr>";
}
$contactRows .= "
<tr><td colspan=\"2\" style=\"border-bottom:1px solid #e5e5e5\"></td></tr>
<tr>
  <td style=\"padding:14px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#737373;vertical-align:top\">Servicios</td>
  <td style=\"padding:14px 16px;font-size:15px;color:#111111\">{$servicesText}</td>
</tr>";

$body = <<<HTML
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5">
<tr><td align="center" style="padding:32px 16px">

<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08)">

  <!-- Header -->
  <tr>
    <td style="background-color:#0a0a0a;padding:32px 40px 28px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align:middle;padding-right:12px">
                  <img src="https://luvant.com.ar/favicon.ico" width="32" height="32" alt="Luvant" style="display:block;border-radius:7px">
                </td>
                <td style="vertical-align:middle;font-size:18px;font-weight:500;letter-spacing:0.04em;color:#ffffff">
                  LUVANT
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-top:20px;font-size:22px;font-weight:600;color:#ffffff;letter-spacing:-0.01em">
            Nuevo mensaje de contacto
          </td>
        </tr>
        <tr>
          <td style="padding-top:6px;font-size:13px;color:#737373">
            Recibido el {$dateStr} desde luvant.com.ar
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Body -->
  <tr>
    <td style="background-color:#ffffff;padding:32px 40px">

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e5;border-radius:8px;overflow:hidden">
        {$contactRows}
      </table>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px">
        <tr>
          <td style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#737373;padding-bottom:10px">
            Mensaje
          </td>
        </tr>
        <tr>
          <td style="background-color:#fafafa;border:1px solid #e5e5e5;border-radius:8px;padding:20px;font-size:15px;line-height:1.7;color:#262626">
            {$safeMessage}
          </td>
        </tr>
      </table>

      <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px">
        <tr>
          <td style="background-color:#0a0a0a;border-radius:8px">
            <a href="mailto:{$safeEmail}?subject=Re: Contacto desde luvant.com.ar" style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:500;color:#ffffff;text-decoration:none;letter-spacing:0.02em">
              Responder a {$safeName}
            </a>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="background-color:#0a0a0a;padding:24px 40px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="font-size:12px;color:#525252;line-height:1.6">
            &copy; {$year} Luvant &middot;
            <a href="https://luvant.com.ar" style="color:#a3a3a3;text-decoration:none">luvant.com.ar</a>
          </td>
        </tr>
        <tr>
          <td style="font-size:11px;color:#525252;padding-top:4px">
            IP: {$safeIp}
          </td>
        </tr>
      </table>
    </td>
  </tr>

</table>

</td></tr>
</table>

</body>
</html>
HTML;

// --- Send via SMTP ---
$subject = "Nuevo contacto: " . $name;

$result = sendSmtp(MAIL_TO, $subject, $body, $email, MAIL_CC);

if ($result === true) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo enviar el mensaje. Intentá de nuevo o escribí a hola@luvant.com.ar']);
}

function sendSmtp(string $to, string $subject, string $htmlBody, string $replyTo, string $cc = '') {
    $ctx = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
    $socket = @stream_socket_client('ssl://' . SMTP_HOST . ':' . SMTP_PORT, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx);

    if (!$socket) {
        return "Conexión fallida: [{$errno}] {$errstr}";
    }

    stream_set_timeout($socket, 10);

    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '220') { fclose($socket); return "Banner: " . trim($resp); }

    fwrite($socket, "EHLO luvant.com.ar\r\n");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '250') { fclose($socket); return "EHLO: " . trim($resp); }

    fwrite($socket, "AUTH LOGIN\r\n");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '334') { fclose($socket); return "AUTH: " . trim($resp); }

    fwrite($socket, base64_encode(SMTP_USER) . "\r\n");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '334') { fclose($socket); return "USER: " . trim($resp); }

    fwrite($socket, base64_encode(SMTP_PASS) . "\r\n");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '235') { fclose($socket); return "PASS: " . trim($resp); }

    fwrite($socket, "MAIL FROM:<" . SMTP_FROM . ">\r\n");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '250') { fclose($socket); return "FROM: " . trim($resp); }

    fwrite($socket, "RCPT TO:<{$to}>\r\n");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '250') { fclose($socket); return "RCPT: " . trim($resp); }

    if ($cc) {
        fwrite($socket, "RCPT TO:<{$cc}>\r\n");
        smtpRead($socket);
    }

    fwrite($socket, "DATA\r\n");
    $resp = smtpRead($socket);
    if (smtpCode($resp) !== '354') { fclose($socket); return "DATA: " . trim($resp); }

    $msgId = md5(uniqid((string)time()));
    $msg  = "From: " . SMTP_FROM_NAME . " <" . SMTP_FROM . ">\r\n";
    $msg .= "Reply-To: {$replyTo}\r\n";
    $msg .= "To: {$to}\r\n";
    // $cc is sent as BCC: delivered via RCPT TO but not exposed in headers
    $msg .= "Subject: {$subject}\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: text/html; charset=UTF-8\r\n";
    $msg .= "Date: " . date('r') . "\r\n";
    $msg .= "Message-ID: <{$msgId}@luvant.com.ar>\r\n";
    $msg .= "\r\n" . $htmlBody . "\r\n.\r\n";

    fwrite($socket, $msg);
    $resp = smtpRead($socket);
    $ok = (smtpCode($resp) === '250');

    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    return $ok ? true : "SEND: " . trim($resp);
}

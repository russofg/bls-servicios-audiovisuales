<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../config/email-config.php';
require_once __DIR__ . '/../config/email-template.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (empty($input)) {
    $input = $_POST;
}

$required_fields = ['name', 'email', 'event_type', 'message'];
$missing_fields = [];

foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Faltan campos requeridos',
        'missing_fields' => $missing_fields
    ]);
    exit;
}

if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'El formato del correo electrónico no es válido'
    ]);
    exit;
}

$name = htmlspecialchars($input['name']);
$email = htmlspecialchars($input['email']);
$phone = isset($input['phone']) ? htmlspecialchars($input['phone']) : 'No proporcionado';
$event_type = htmlspecialchars($input['event_type']);
$message = htmlspecialchars($input['message']);

$email_body = generarPlantillaEmail($name, $email, $phone, $event_type, $message);

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = SMTP_PORT;

    $mail->setFrom(SMTP_USER, 'Formulario BLS');
    $mail->addAddress('russofg@gmail.com');
    $mail->addBCC('bogadojonathan012@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje de contacto desde BLS Servicios Audiovisuales';
    $mail->Body    = $email_body;

    $mail->send();
    echo json_encode(['success' => true, 'message' => '¡Gracias por tu mensaje! Te contactaremos pronto.']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => "Error al enviar el correo: {$mail->ErrorInfo}"
    ]);
}
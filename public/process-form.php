<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Verificar si la solicitud es POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener los datos del formulario
$input = json_decode(file_get_contents('php://input'), true);
if (empty($input)) {
    $input = $_POST;
}

// Validar datos requeridos
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

// Validar email
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'El formato del correo electrónico no es válido'
    ]);
    exit;
}

// Configurar correo
$to = 'russofg@gmail.com';

$bcc_emails = [
    'info@serviciosbls.com',
    'russofg@gmail.com',
];
$subject = 'Nuevo mensaje de contacto desde BLS Servicios Audiovisuales';

// Sanitizar entrada para prevenir inyección de encabezados
$name = htmlspecialchars($input['name']);
$email = htmlspecialchars($input['email']);
$phone = isset($input['phone']) ? htmlspecialchars($input['phone']) : 'No proporcionado';
$event_type = htmlspecialchars($input['event_type']);
$message = htmlspecialchars($input['message']);

// Construir el cuerpo del correo
$email_body = "
<html>
<head>
  <title>Nuevo mensaje de contacto</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
    .content { padding: 15px; }
    .field { margin-bottom: 10px; }
    .field strong { font-weight: bold; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h2>Nuevo mensaje de contacto desde el sitio web</h2>
    </div>
    <div class='content'>
      <div class='field'><strong>Nombre:</strong> {$name}</div>
      <div class='field'><strong>Email:</strong> {$email}</div>
      <div class='field'><strong>Teléfono:</strong> {$phone}</div>
      <div class='field'><strong>Tipo de Evento:</strong> {$event_type}</div>
      <div class='field'><strong>Mensaje:</strong><br>{$message}</div>
    </div>
  </div>
</body>
</html>
";

// Configurar encabezados para correo HTML
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: {$name} <{$email}>" . "\r\n";
$headers .= "Reply-To: {$email}" . "\r\n";

// Añadir destinatarios en copia oculta (BCC)
if (!empty($bcc_emails) && is_array($bcc_emails)) {
    $bcc_string = implode(', ', $bcc_emails);
    $headers .= "Bcc: {$bcc_string}" . "\r\n";
}

$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar correo
$mail_sent = mail($to, $subject, $email_body, $headers);

// Responder al cliente
if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => '¡Gracias por tu mensaje! Te contactaremos pronto.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error al enviar el correo. Por favor, intenta de nuevo más tarde o contáctanos directamente.'
    ]);
}

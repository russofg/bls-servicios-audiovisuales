<?php
function generarPlantillaEmail($name, $email, $phone, $event_type, $message) {
    return "
    <html>
    <head><style>body{font-family:sans-serif; line-height:1.6;}</style></head>
    <body>
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Teléfono:</strong> {$phone}</p>
        <p><strong>Tipo de Evento:</strong> {$event_type}</p>
        <p><strong>Mensaje:</strong><br>{$message}</p>
    </body>
    </html>";
}
<?php
function generarPlantillaEmail($name, $email, $phone, $event_type, $message) {
    return "
    <!DOCTYPE html>
    <html lang=\"es\">
    <head>
      <meta charset=\"UTF-8\">
      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
      <title>Nuevo mensaje de contacto</title>
    </head>
    <body style=\"margin: 0; padding: 0; background-color: #f4f4f4;\">
      <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#f4f4f4\">
        <tr>
          <td align=\"center\">
            <table width=\"600\" cellpadding=\"20\" cellspacing=\"0\" border=\"0\" bgcolor=\"#ffffff\" style=\"margin: 40px auto; font-family: Arial, sans-serif; color: #333333; border-radius: 5px;\">
              <tr>
                <td align=\"center\" style=\"font-size: 24px; font-weight: bold; color: #2c3e50;\">
                  Nuevo mensaje de contacto
                </td>
              </tr>
              <tr>
                <td>
                  <table width=\"100%\" cellpadding=\"5\" cellspacing=\"0\" border=\"0\" style=\"font-size: 15px;\">
                    <tr><td><strong>Nombre:</strong> {$name}</td></tr>
                    <tr><td><strong>Email:</strong> {$email}</td></tr>
                    <tr><td><strong>Teléfono:</strong> {$phone}</td></tr>
                    <tr><td><strong>Tipo de Evento:</strong> {$event_type}</td></tr>
                    <tr><td><strong>Mensaje:</strong><br>{$message}</td></tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align=\"center\" style=\"font-size: 12px; color: #888888; padding-top: 20px;\">
                  BLS Servicios Audiovisuales · www.blsnet.com.ar
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    ";
}

<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: Content-Type');

// Para peticiones GET, mostrar un mensaje de prueba
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(['success' => true, 'message' => 'El script de prueba está funcionando correctamente']);
    exit;
}

// Para peticiones POST, simular el envío de un email
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (empty($input)) {
        $input = $_POST;
    }

    // Registrar los datos recibidos en un log
    error_log("Datos recibidos: " . print_r($input, true));

    // Simular éxito
    echo json_encode([
        'success' => true,
        'message' => 'Prueba exitosa: No se envió ningún email real, pero los datos fueron procesados correctamente',
        'data' => $input
    ]);
    exit;
}

// Para cualquier otro método HTTP
http_response_code(405);
echo json_encode(['success' => false, 'message' => 'Método no permitido']);
exit;

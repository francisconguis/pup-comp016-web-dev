<?php
// 1. Tell the browser we are responding with JSON
header('Content-Type: application/json');

// 2. Read the raw JSON data sent by the Fetch API
$raw_input = file_get_contents('php://input');

// 3. Decode the JSON into a PHP array
$data = json_decode($raw_input, true);

// 4. Process the data and prepare a response
if (isset($data['student_name']) && $data['student_name'] != "") {
    $name = $data['student_name'];

    // Simulate checking a database
    $response = [
        "status" => "success",
        "message" => "Student '$name' is officially verified and enrolled."
    ];
} else {
    $response = [
        "status" => "error",
        "message" => "Verification failed: No name provided."
    ];
}

// 5. Convert the PHP array back to JSON and send it
echo json_encode($response);
?>

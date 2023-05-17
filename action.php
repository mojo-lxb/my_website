<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = [
        'firstName' => $_POST['firstName'],
        'lastName' => $_POST['lastName'],
        'email' => $_POST['email'],
        'message' => $_POST['message']
    ];

    $json = json_encode($data);

    // Save or process the JSON data as needed
    // ...
}
?>
<?php
require 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $student_name = $conn->real_escape_string($_POST['student_name']);
    $student_number = $conn->real_escape_string($_POST['student_number']);
    $year_level = (int) $_POST['year_level'];

    $sql = "INSERT INTO registrations (student_name, student_number, year_level) 
            VALUES ('$student_name', '$student_number', $year_level)";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

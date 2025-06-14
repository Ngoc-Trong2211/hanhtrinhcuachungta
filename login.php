<?php
session_start();
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pass = $_POST["pass"] ?? '';

    $stmt = $conn->prepare("SELECT * FROM users WHERE pass = ?");
    $stmt->execute([$pass]);
    $user = $stmt->fetch();

    if ($user) {
        echo "success";
    } else {
        echo "error";
    }
}

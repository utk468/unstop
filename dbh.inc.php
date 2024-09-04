<?php

$dsn = "mysql:host=localhost;dbname=usersunstop";
$dbusername = "root";
$dbpa = "";

try {
    $pdo = new PDO($dsn, $dbusername, $dbpa);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

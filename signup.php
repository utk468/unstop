<?php
require "dbh.inc.php";
session_start();

$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$num = $_POST["number"];
$unique_id = rand(time(), 10000000);


    $query = "INSERT INTO users (unique_id, fname, lname, email, number) VALUES (:unique_id, :fname, :lname, :email, :number)";
    $stm = $pdo->prepare($query);
    
    $stm->bindParam(":unique_id", $unique_id);
    $stm->bindParam(":fname", $fname);
    $stm->bindParam(":lname", $lname);  
    $stm->bindParam(":email", $email);
    $stm->bindParam(":number", $num);
    
    if ($stm->execute()) {
        $_SESSION["unique_id"] = $unique_id;
        echo "success";
    } else {
        echo "failed";
    }


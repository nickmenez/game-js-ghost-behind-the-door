<?php

$playerName = $_POST['playerName'];
$highScore = $_POST["highScore"];
date_default_timezone_set('Australia/Brisbane');
$date = date('m/d/Y h:i:s a', time());

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

// Create connection
$conn = new mysqli($servername,$username,$password,$dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: ".$conn->connect_error);
}

$sql = "INSERT INTO table_name (id, timedate, username_column, highscore_column) VALUES (default, '$date','" . $playerName . "', '" . $highScore . "') ON DUPLICATE KEY UPDATE highscore_column = '" . $highScore . "'";

if ($conn->query($sql)===TRUE) {
    //echo "New record created successfully";
} else {
    echo "Error: ".$sql."<br>".$connect_error;
}

$conn->close();

?>

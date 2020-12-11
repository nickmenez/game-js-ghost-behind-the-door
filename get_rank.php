<?php


$q = $_GET['q'];

$conn = mysqli_connect("localhost", "username", "password", "database");

$result = mysqli_query($conn, "SELECT COUNT(*)+1 FROM table_name WHERE highscore_column > '$q'");

$data = mysqli_fetch_row($result);
        
echo json_encode($data);


exit();
?>

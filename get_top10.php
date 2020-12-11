<?php

$conn = mysqli_connect("localhost", "username", "password", "database");

$result = mysqli_query($conn, "SELECT * FROM table_name ORDER BY highscore_column DESC LIMIT 10");

$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
 
echo json_encode($data);


exit();
?>



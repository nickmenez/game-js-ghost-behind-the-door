<?php


$q = $_GET['q'];

$conn = mysqli_connect("localhost", "adminnick", "Gs%+^4m8Xiz&", "playground");

$result = mysqli_query($conn, "SELECT COUNT(*)+1 FROM trapdoor_leaderboard WHERE highscore_column > '$q'");

$data = mysqli_fetch_row($result);
        
echo json_encode($data);


exit();
?>
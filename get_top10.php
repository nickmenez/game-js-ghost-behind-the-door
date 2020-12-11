<?php



$conn = mysqli_connect("localhost", "adminnick", "Gs%+^4m8Xiz&", "playground");

$result = mysqli_query($conn, "SELECT * FROM trapdoor_leaderboard ORDER BY highscore_column DESC LIMIT 10");
//$result = mysqli_query($conn, "SELECT t.* FROM trapdoor_leaderboard t JOIN ( SELECT username_column, MAX(highscore_column) maxVal FROM trapdoor_leaderboard GROUP BY username_column ORDER BY maxVal DESC LIMIT 10) t2 ON t.highscore_column = t2.maxVal AND t.username_column = t2.username_column;");



$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
 
echo json_encode($data);


exit();
?>



ert <?php

$playerName = $_POST['playerName'];
$highScore = $_POST["highScore"];
date_default_timezone_set('Australia/Brisbane');
$date = date('m/d/Y h:i:s a', time());

$servername = "localhost";
$username = "adminnick";
$password = "Gs%+^4m8Xiz&";
$dbname = "playground";

// Create connection
$conn = new mysqli($servername,$username,$password,$dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: ".$conn->connect_error);
}

$sql = "INSERT INTO trapdoor_leaderboard (id, timedate, username_column, highscore_column) VALUES (default, '$date','" . $playerName . "', '" . $highScore . "') ON DUPLICATE KEY UPDATE highscore_column = '" . $highScore . "'";

if ($conn->query($sql)===TRUE) {
    //echo "New record created successfully";
} else {
    echo "Error: ".$sql."<br>".$connect_error;
}

$conn->close();

?>
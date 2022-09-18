<?php 

include_once("connection.php");

$user_id = $_POST['user_id'];
$content = $_POST['content'];


$query = $mysqli->prepare("INSERT INTO tweets (tweeter_id ,content) VALUES (?,?)");
$query->bind_param('is', $user_id, $content );
$query->execute();
$query->close();

$response =[];
$response["success"] = TRUE;
echo json_encode($response);

?>
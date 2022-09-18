<?php 

include_once("connection.php");

$user_id = $_POST['user_id'];
$content = $_POST['content'];
$image = $_POST['image'];
$uniqid=uniqid();

// $decoded = base64_decode($image);
// $filename = '../assets/image.jpg';
// file_put_contents($filename, $decoded);

$image = str_replace('data:image/png;base64,', '', $image);
$image = str_replace(' ', '+', $image);
$data = base64_decode($image);
$file = "../assets/".$uniqid.".png";
$success = file_put_contents($file, $data);

if($success){
$query = $mysqli->prepare("INSERT INTO tweets (tweeter_id ,content, picture_url) VALUES (?,?,?)");
$query->bind_param('iss', $user_id, $content , $uniqid);
$query->execute();
$query->close();

$response =[];
$response["success"] = TRUE;
}else{
    $response["success"] = FALSE;
}
echo json_encode($response);

?>
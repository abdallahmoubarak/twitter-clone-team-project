<?php 

include_once("connection.php");

$full_name = $_POST['full_name'];
$email = $_POST['email'];
$birthdate = $_POST['birthdate'];
$username = $_POST['username'];
$password = $_POST['password'];
$password = hash('sha256', $password);


$query = $mysqli->prepare("INSERT INTO users(full_name,email,birthdate,username,password) VALUES (?,?,?,?,?)");
$query->bind_param('sssss', $full_name,$email,$birthdate,$username,$password);
$query->execute();

$query = $mysqli->prepare("SELECT * FROM users WHERE username = ?");
$query->bind_param('s', $username);
$query->execute();
$arr = $query->get_result();

$result =[];
while($value = $arr->fetch_assoc()){
    $result[] = $value;
};


echo json_encode($result[0]);
?>
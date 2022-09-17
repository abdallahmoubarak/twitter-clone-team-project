<?php

include_once("connection.php");
$username = $_POST['username'];

$query = $mysqli->prepare("SELECT username FROM users WHERE username = ?");
$query->bind_param('s', $username);
$query->execute();
$arr = $query->get_result();


$result =[];
while($value = $arr->fetch_assoc()){
    $result[] = $value;
};

// if the result is empty then the given value does not exist in the table
if(!$result){
    $response["exist"] = FALSE;
}else{
    $response["exist"] = TRUE;
}

echo json_encode($response);
?>
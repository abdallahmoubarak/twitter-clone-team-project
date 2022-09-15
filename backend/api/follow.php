<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    include_once('connection.php');

    $follower = $_GET['follower_id'];
    $followed = $_GET['followed_id'];

    // using ii in bind param because ids are numbers inside the database so it should integer type
    $query = $mysqli->prepare('INSERT INTO follows(follower_id, followed_id) VALUES(?, ?)');
    $query->bind_param('ii', $follower, $followed);
    $query->execute();

    $response['success'] = TRUE;
    echo json_encode($response);
?>
<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    include('unfollow_func.php');

    $response['success'] = unfollow($_GET['follower_id'], $_GET['followed_id']);
    echo json_encode($response);
?>
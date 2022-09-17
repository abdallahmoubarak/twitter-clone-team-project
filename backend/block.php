<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    include_once('connection.php');

    $blocker = $_GET['blocker_id'];
    $blocked = $_GET['blocked_id'];

    $query = $mysqli->prepare('DELETE FROM follows WHERE (follower_id=? AND followed_id=?) OR (follower_id=? OR followed_id=?)');
    $query->bind_param('iiii', $blocker, $blocked, $blocked, $blocker);
    $query->execute();

    try{
        $query = $mysqli->prepare('INSERT INTO blocks VALUES(?, ?)');
        $query->bind_param('ii', $blocker, $blocked);
        $query->execute();
        $response['success'] = TRUE;
    }catch(Exception $e){
        $response['success'] = FALSE;
    }
    echo json_encode($response);
?>
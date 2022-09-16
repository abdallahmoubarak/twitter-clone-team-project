<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    include_once('connection.php');

    $follower = $_GET['follower_id'];
    $followed = $_GET['followed_id'];

    $query = $mysqli->prepare('SELECT blocker_id FROM blocks WHERE (blocker_id=? AND blocked_id=?) OR (blocker_id=? AND blocked_id=?)');
    $query->bind_param('iiii', $follower, $followed, $followed, $follower);
    $query->execute();
    $response = $query->get_result();
    $response = $response->fetch_assoc();
    if(!$response){
        // catching sql error thrown when having a unique attribute and adding the same value
        try{
            // using ii in bind param because ids are numbers inside the database so it should integer type
            $query = $mysqli->prepare('INSERT INTO follows(follower_id, followed_id) VALUES(?, ?)');
            $query->bind_param('ii', $follower, $followed);
            $query->execute();
            $response['success'] = TRUE;
        }catch(Exception $e){
            $response['success'] = FALSE;
        } 
    }else{
        $response['success'] = FALSE;
    }
    echo json_encode($response);
?>
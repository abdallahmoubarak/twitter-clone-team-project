<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    include_once('connection.php');

    $disliker = $_GET['disliker_id'];
    $tweet = $_GET['tweet_id'];

    // delete the like from the likes table
    $query = $mysqli->prepare('DELETE FROM likes WHERE liker_id=? AND tweet_id=?');
    $query->bind_param('ii', $disliker, $tweet);
    $query->execute();

    // check if a row was deleted to decrement the likes number on the tweet in case there was
    // and to leave it as is if there was no deleted row
    $query = $mysqli->prepare('SELECT ROW_COUNT()');
    $query->execute();
    $result = $query->get_result();
    $result = $result->fetch_assoc();

    if($result['ROW_COUNT()'] == 1){
        $query = $mysqli->prepare('UPDATE tweets SET likes_number=likes_number-1 WHERE id=?');
        $query->bind_param('i', $tweet);
        $query->execute();
        $response['success'] = TRUE;
    }else{
        // set success as false if no row was deleted
        $response['success'] = FALSE;
    }

    echo json_encode($response);
?>
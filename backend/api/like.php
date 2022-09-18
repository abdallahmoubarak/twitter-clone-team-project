<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    include('connection.php');

    $liker = $_GET['liker_id'];
    $tweet = $_GET['tweet_id'];

    // catch sql error in case tweet is already liked
    try{
        // add the liker to the table of likes
        $query = $mysqli->prepare('INSERT INTO likes VALUES(?, ?)');
        $query->bind_param('ii', $liker, $tweet);
        $query->execute();
        
        // increase the number of likes that a tweet has in the tweets table
        $query = $mysqli->prepare('UPDATE tweets SET likes_number=likes_number+1 WHERE id=?');
        $query->bind_param('i', $tweet);
        $query->execute();
        $response['success'] = TRUE;
    }catch(Exception $e){
        $response['success'] = FALSE;
    }

    echo json_encode($response);
?>
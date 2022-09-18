<?php 
    include('connection.php');
    include('unfollow_func.php');

    $blocker = $_GET['blocker_id'];
    $blocked = $_GET['blocked_id'];

    // make both of the users unfollow each other and save the ids of the ones that 
    // need decrements in their follower_count or following_count
    if(unfollow($blocker, $blocked)){
        $decrement_following_count[] = $blocker;
        $decrement_follower_count[] = $blocked;
    }
    if(unfollow($blocked, $blocker)){
        $decrement_following_count[] = $blocked;
        $decrement_follower_count[] = $blocker;    
    }

    // both attributes in blocks table together are unique so if a users tries to block a user multiple times
    // the query will throw an error so it gets cought and in the response we can find the case of success or failure
    try{
        $query = $mysqli->prepare('INSERT INTO blocks VALUES(?, ?)');
        $query->bind_param('ii', $blocker, $blocked);
        $query->execute();
        $response['success'] = TRUE;
    }catch(Exception $e){
        $response['success'] = FALSE;
    }
    if(isset($decrement_follower_count)){
        $response['decrement_follower_count'] = $decrement_follower_count;
        $response['decrement_following_count'] = $decrement_following_count;
    }
    
    echo json_encode($response);
?>
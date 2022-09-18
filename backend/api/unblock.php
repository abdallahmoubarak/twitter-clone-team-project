<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    include_once('connection.php');

    $blocker = $_GET['blocker_id'];
    $blocked = $_GET['blocked_id'];

    // delete the block from the blocks table
    $query = $mysqli->prepare('DELETE FROM blocks WHERE blocker_id=? AND blocked_id=?');
    $query->bind_param('ii', $blocker, $blocked);
    $query->execute();

    // if there was a block previously, then the delete will get one row changed nad in that case the unblock was successfull
    $query = $mysqli->prepare('SELECT ROW_COUNT()');
    $query->execute();
    $result = $query->get_result();
    $result = $result->fetch_assoc();

    if($result['ROW_COUNT()'] == 1){
        $response['success'] = TRUE;
    }else{
        $response['success'] = FALSE;
    }

    echo json_encode($response);
?>
<?php 
    function unfollow($follower, $followed){
        include("connection.php");
        // delete the follow from the follows table
        $query = $mysqli->prepare('DELETE FROM follows WHERE follower_id=? AND followed_id=?');
        $query->bind_param('ii', $follower, $followed);
        $query->execute();

        // get the number of rows affected by the last query
        $query = $mysqli->prepare('SELECT ROW_COUNT()');
        $query->execute();
        $result = $query->get_result();
        $result = $result->fetch_assoc();

        // if a row got changed so the follow existed in the follows table and got deleted so we need to decrement
        // the following count of the prior follower and the follower count of previously followed
        if($result["ROW_COUNT()"] == 1){
            $query = $mysqli->prepare("UPDATE users SET following_count=following_count-1 WHERE id=?");
            $query->bind_param('i', $follower);
            $query->execute();
            $query = $mysqli->prepare("UPDATE users SET follower_count=follower_count-1 WHERE id=?");
            $query->bind_param('i', $followed);
            $query->execute();
            // return true or false to know if the follower or following count has changed
            return TRUE;
        }
        return FALSE;
    }
?>
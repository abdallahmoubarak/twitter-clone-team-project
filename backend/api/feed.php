<?php 
    include('connection.php');
    include('convert_images.php');

    $profile = $_GET['profile_id'];

    // retreive information about the tweet and the tweeter of all users followed ordered by newest to oldest
    $query = $mysqli->prepare('SELECT t.id, t.tweeter_id, t.content, t.picture_url, t.created_at, t.likes_number, u.username, u.full_name
                                FROM tweets AS t, users AS u, follows AS f 
                                WHERE ?=f.follower_id AND f.followed_id = u.id AND u.id = t.tweeter_id
                                ORDER BY t.created_at DESC');
    $query->bind_param('i', $profile);
    $query->execute();
    $result = $query->get_result();
    $response = [];
    
    while($value = $result->fetch_assoc()){
        // return the base64 of the image and delete the picture url from the retreived data
        // if($value['picture_url']){
        //     $value['image'] = convertToBase64($value['picture_url']);
        // }
        // unset($value['picture_url']);
        if(!$value['picture_url']){
            unset($value['picture_url']);
        }
        $response[] = $value;
    }

    echo json_encode($response);
?>
<?php 
    include('connection.php');
    include('convert_images.php');

    $profile = $_GET['profile_id'];

    // retrieving tweets liked by the user 
    $query = $mysqli->prepare('SELECT t.id, t.tweeter_id, t.content, t.picture_url, t.created_at, t.likes_number, u.username, u.full_name
                                FROM tweets AS t, users AS u, likes AS l 
                                WHERE l.liker_id=? AND l.tweet_id = t.id AND t.tweeter_id = u.id
                                ORDER BY t.created_at DESC');
    $query->bind_param('i', $profile);
    $query->execute();
    $result = $query->get_result();

    $response = [];
    while($value = $result->fetch_assoc()){
        // adding the base 64 image and removing the image path
        if($value['picture_url']){
            $value['image'] = convertToBase64($value['picture_url']);
        }
        unset($value['picture_url']);
        $response[] = $value;
    }

    echo json_encode($response);
?>
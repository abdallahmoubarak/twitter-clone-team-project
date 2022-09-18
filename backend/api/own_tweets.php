<?php 
    include('connection.php');
    include('convert_images.php');

    $profile = $_GET['profile_id'];

    // retrieve array of tweets created by the user ordered from newest to oldest and his username and full name
    $query = $mysqli->prepare('SELECT t.id, t.content, t.picture_url, t.likes_number, u.username, u.full_name
                                FROM tweets AS t, users AS U
                                WHERE t.tweeter_id=? AND t.tweeter_id = u.id
                                ORDER BY t.created_at DESC');
    $query->bind_param('i', $profile);
    $query->execute();
    $result = $query->get_result();

    $response = [];
    while($value = $result->fetch_assoc()){
        // removing the image url and adding the image in base 64 for each row retrieved
        if($value['picture_url']){
            $value['image'] = convertToBase64($value['picture_url']);
        }
        unset($value['picture_url']);
        $response[] = $value;
    }

    echo json_encode($response);
?>
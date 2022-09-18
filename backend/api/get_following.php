<?php 
    include('connection.php');
    include('convert_images.php');

    $user = $_GET['user_id'];

    // fetching needed information of followed users
    $query = $mysqli->prepare('SELECT u.id, u.full_name, u.username, u.profile_picture_url
                                FROM users AS u, follows AS f
                                WHERE f.follower_id=? AND f.followed_id = u.id');
    $query->bind_param('i', $user);
    $query->execute();
    $result = $query->get_result();

    $resonse = [];
    while($value = $result->fetch_assoc()){
        if($value['profile_picture_url']){
            $value['profiole_img'] = convertToBase64($value['profile_picture_url']);
        }
        unset($value['profile_picture_url']);
        $response[] = $value;
    }

    echo json_encode($response);
?>
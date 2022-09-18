<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    include('connection.php');
    include('convert_images.php');

    $search = $_GET['search'];
    // pattern to match anything that starts with the value of search
    $search = $search . '%';

    // retrieving needed information of users that have a username or full name that matches the pattern
    $query = $mysqli->prepare('SELECT id, full_name, username, profile_picture_url FROM users WHERE username LIKE ? OR full_name LIKE ?');
    $query->bind_param('ss', $search, $search);
    $query->execute();
    $result = $query->get_result();

    $response = [];
    // adding the profile image as bas 64 if there is one and removing the profile picture url
    while($value = $result->fetch_assoc()){
        if($value['profile_picture_url']){
            $value['profile_img'] = convertToBase64($value['profile_picture_url']);
        }
        unset($value['profile_picture_url']);
        $response[] = $value;
    }

    echo json_encode($response);
?>
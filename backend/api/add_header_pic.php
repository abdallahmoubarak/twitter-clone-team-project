<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    include('connection.php');
    include('convert_images.php');

    $image = $_POST['image'];
    $profile = $_POST['profile_id'];

    // save the header image in the unique directory specified for the user
    $image = convertToImg($image, 'user_'.$profile.'/header.jpg');

    // save header url in database
    $query = $mysqli->prepare('UPDATE users SET header_url=? WHERE id=?');
    $query->bind_param('si', $image, $profile);
    $query->execute();
    $response['success'] = TRUE;

    echo json_encode($response);
?>
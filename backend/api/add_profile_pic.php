<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    include_once('connection.php');
    include_once('convert_images.php');

    $image = $_POST['image'];
    $profile = $_POST['profile_id'];

    $image = convertToBase64($image);
    // saving the image in the directory specified for the user
    $image = convertToImg($image, 'user_'.$profile.'/profile.jpg');

    // save image url in database
    $query = $mysqli->prepare('UPDATE users SET profile_picture_url=? WHERE id=?');
    $query->bind_param('si', $image, $profile);
    $query->execute();
    $response['success'] = TRUE;

    echo json_encode($response);
?>
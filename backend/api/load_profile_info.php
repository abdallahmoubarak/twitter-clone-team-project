<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    include('connection.php');
    include('convert_images.php');

    $profile = $_GET['profile_id'];

    // retrieve all information of the user
    $query = $mysqli->prepare('SELECT * FROM users WHERE id=?');
    $query->bind_param('i', $profile);
    $query->execute();
    $result = $query->get_result();
    $result = $result->fetch_assoc();

    // remove the password as it will not be used
    unset($result['password']);
    // delete image url and add images as base64
    $result['profile_img'] = convertToBase64($result['profile_picture_url']);
    unset($result['profile_picture_url']);
    $result['header_img'] = convertToBase64($result['header_url']);
    unset($result['header_url']);
    
    echo json_encode($result);
?>
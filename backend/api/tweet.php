<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    include('connection.php');
    include('convert_images.php');

    $tweeter = $_POST['tweeter_id'];
    $content = $_POST['content'];
    if(isset($_POST['image'])){
        $image = $_POST['image'];
        // creating a unique name for each tweet image
        $image_url = 'id_' . $tweeter . '_' . date("Y-m-d_H-i-s") . '.jpg';
        $image_url = convertToImg($image, $image_url);
        $image_new_url = 'user_' . $tweeter . '/' . $image_url;
        rename($image_url, $image_new_url);
        
        $query = $mysqli->prepare('INSERT INTO tweets(tweeter_id, content, picture_url) VALUES(?,?,?)');
        $query->bind_param('iss', $tweeter, $content, $image_new_url);
        $query->execute();
    }else{
        $query = $mysqli->prepare('INSERT INTO tweets(tweeter_id, content) VALUES(?, ?)');
        $query->bind_param('is', $tweeter, $content);
        $query->execute();
    }
    $response['success'] = TRUE;
    echo json_encode($response);
?>
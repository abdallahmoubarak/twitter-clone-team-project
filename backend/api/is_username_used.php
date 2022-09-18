<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    include('is_attribute_used.php');

    $response["used"] = isAttributeAlreadyUsed('username', $_GET['username']);
    echo json_encode($response);
?>
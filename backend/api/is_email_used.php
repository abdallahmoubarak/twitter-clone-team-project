<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    include('is_attribute_used.php');

    $response['used'] = isAttributeAlreadyUsed('email', $_GET['email']);
    echo json_encode($response);
?>
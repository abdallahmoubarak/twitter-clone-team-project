<?php 
    include('is_attribute_used.php');

    $response['used'] = isAttributeAlreadyUsed('email', $_GET['email']);
    echo json_encode($response);
?>
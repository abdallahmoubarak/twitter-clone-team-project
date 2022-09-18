<?php 
    include('is_attribute_used.php');

    $response['used'] = isAttributeAlreadyUsed('phone', $_GET['phone']);
    echo json_encode($response);
?>
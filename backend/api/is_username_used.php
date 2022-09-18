<?php 
    include('is_attribute_used.php');

    $response["used"] = isAttributeAlreadyUsed('username', $_GET['username']);
    echo json_encode($response);
?>
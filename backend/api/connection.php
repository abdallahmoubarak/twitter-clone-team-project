<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    
    $host = "localhost";
    $username = "root";
    $password = null;
    $db_name = "twitterdb";

    $mysqli = new mysqli($host, $username, $password, $db_name);

?>
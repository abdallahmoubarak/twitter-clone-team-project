<?php 
   header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Headers: *");

    $host = "localhost";
    $username = "root";
    $password = null;
    $db_name = "twitter_db";

    $mysqli = new mysqli($host, $username, $password, $db_name);

?>
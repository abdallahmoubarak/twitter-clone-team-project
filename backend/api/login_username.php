<?php 
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Origin: *');
    include_once('login.php');

    echo login('username');
?>
<?php 
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Origin: *");
    include("login.php");

    echo login('phone');
?>
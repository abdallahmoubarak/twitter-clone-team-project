<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    include_once("signup.php");

    echo signUp("phone");

?>
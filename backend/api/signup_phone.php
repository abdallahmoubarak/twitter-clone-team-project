<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    include("sign_up.php");

    echo signUp("phone");

?>
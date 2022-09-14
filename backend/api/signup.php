<?php 

    // option paramter to know if the user will sign up with email or phone 
    function signUp($option){
        include_once("connection.php");
        if($option == "phone"){
            $phone = $_POST[$option];
        }else if ($option == "email"){
            $email = $_POST[$option];
        }
        $full_name = $_POST['full_name'];
        $birthdate = $_POST['birthdate'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $password = hash('sha256', $password);
        
        if (isset($phone)){
            $query = $mysqli->prepare("INSERT INTO users(phone, full_name, birthdate, username, password) VALUES(?, ?, ?, ?, ?)");
            $query->bind_param('sssss', $phone, $full_name, $birthdate, $username, $password);
        }else if (isset($email)){
            $query = $mysqli->prepare("INSERT INTO users(email, full_name, birthdate, username, password) VALUES(?, ?, ?, ?, ?)");
            $query->bind_param('sssss', $email, $full_name, $birthdate, $username, $password);
        }
        $query->execute();
        
        $response = ["status" => TRUE];
        return json_encode($response);
    }

?>
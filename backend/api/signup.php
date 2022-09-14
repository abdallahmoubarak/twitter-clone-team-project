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
        
        // depending on the option the phone or the email attribute will be filled in the db
        $query = $mysqli->prepare("INSERT INTO users(" . $option . ", full_name, birthdate, username, password) VALUES(?, ?, ?, ?, ?)");
        if (isset($phone)){
            $query->bind_param('sssss', $phone, $full_name, $birthdate, $username, $password);
        }else if (isset($email)){
            $query->bind_param('sssss', $email, $full_name, $birthdate, $username, $password);
        }
        $query->execute();
        
        // will be returned by the api to know if the insert was successfull
        $response = ["status" => TRUE];
        return json_encode($response);
    }

?>
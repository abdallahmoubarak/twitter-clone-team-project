<?php 

    // option paramter to know if the user will sign up with email or phone 
    function signUp($option){
        include('connection.php');
        include('is_attribute_used.php');
        if($option == 'phone'){
            $phone = $_POST[$option];
        }else if ($option == 'email'){
            $email = $_POST[$option];
        }
        $username = $_POST['username'];
        if(isAttributeAlreadyUsed('username', $username)){
            $response['success'] = FALSE;
            return json_encode($response);
        }
        $full_name = $_POST['full_name'];
        $birthdate = $_POST['birthdate'];
        $password = $_POST['password'];
        $password = hash('sha256', $password);
        
        // depending on the option the phone or the email attribute will be filled in the db
        $query = $mysqli->prepare('INSERT INTO users(' . $option . ', full_name, birthdate, username, password) VALUES(?, ?, ?, ?, ?)');
        if (isset($phone)){
            $query->bind_param('sssss', $phone, $full_name, $birthdate, $username, $password);
        }else if (isset($email)){
            $query->bind_param('sssss', $email, $full_name, $birthdate, $username, $password);
        }
        $query->execute();

        // get the id of the new account to create a directory to store the images of the user
        $query = $mysqli->prepare('SELECT id FROM users ORDER BY id DESC LIMIT 1');
        $query->execute();
        $result = $query->get_result();
        $result = $result->fetch_assoc();
        mkdir('user_' . $result['id']);

        // will be returned by the api to know if the insert was successfull
        $response = ['status' => TRUE];
        return json_encode($response);
    }

?>
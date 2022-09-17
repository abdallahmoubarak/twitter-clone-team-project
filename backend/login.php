<?php 
    function login($option){
        include_once("connection.php");
        if ($option == "phone"){
            $phone = $_POST['phone'];
        }else if ($option == "email"){
            $email = $_POST['email'];
        }else if ($option == 'username'){
            $username = $_POST['username'];
        }
        $password = $_POST['password'];
        $password = hash('sha256', $password);

        // prepare the sql query based on the option passed to the function
        $query = $mysqli->prepare("SELECT * FROM users WHERE " . $option . "=? and password=?");
        if (isset($phone)){
            $query->bind_param('ss', $phone, $password);
        }else if(isset($email)){
            $query->bind_param('ss', $email, $password);
        }else if(isset($username)){
            $query->bind_param('ss', $username, $password);
        }
        $query->execute();
        $arr = $query->get_result();

        // load all account attributes into result array
        // no while loop since the result will be only one account
        $result = $arr->fetch_assoc();


        // if the result array is empty set success to false 
        if(!$result){
            $response["success"] = FALSE;
        }else{
            // seperate the account info from the authentication success 
            $response['account'] = $result;
            $response["success"] = TRUE;
        }
        return json_encode($response);
    }
?>
<?php 
    function login($option){
        include_once("connection.php");
        if ($option == "phone"){
            $phone = $_POST['phone'];
        }else if ($option == "email"){
            $email = $_POST['email'];
        }
        $password = $_POST['password'];
        $password = hash('sha256', $password);

        // prepare the sql query based on the option passed to the function
        $query = $mysqli->prepare("SELECT * FROM users WHERE " . $option . "=? and password=?");
        if (isset($phone)){
            $query->bind_param('ss', $phone, $password);
        }else if(isset($email)){
            $query->bind_param("ss", $email, $password);
        }
        $query->execute();
        $arr = $query->get_result();

        // load all account attributes into result array
        $result = [];
        while ($value = $arr->fetch_assoc()){
            $result[] = $value;
        }

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
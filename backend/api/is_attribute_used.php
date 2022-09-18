<?php

    // checks if a value is already assigned to the given attribute name in the users table
    function isAttributeAlreadyUsed($attribute_name, $attribute_value){
        include("connection.php");
        $query = $mysqli->prepare("SELECT " . $attribute_name . " FROM users WHERE " . $attribute_name . "=?");
        $query->bind_param('s', $attribute_value);
        $query->execute();
        $arr = $query->get_result();

        $result = [];
        while($value = $arr->fetch_assoc()){
            $result[] = $value;
        }
        // if the result is empty then the given value does not exist in the table
        if(!$result){
            return FALSE;
        }else{
            return TRUE;
        }
    }
?>
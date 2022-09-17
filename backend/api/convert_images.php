<?php 
    function convertToImg($base64_string, $resultingImage){
        $file = fopen($resultingImage, 'wb');
        fwrite($file, base64_decode($base64_string));
        fclose($file);
        return $resultingImage;
    }

    function convertToBase64($image){
        $data = file_get_contents($image);
        return base64_encode($data);
    }
?>
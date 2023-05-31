<?php
require_once '../connection.php';

header('Content-Type: application/json');
header('Accept: application/json');
header('Access-Control-Allow-Origin: *');


$result = mysqli_query($conn,
         'INSERT INTO random_number (digit, time)
          VALUES ('.rand(1,1000).', '.time().')'
          );
          
if(!$result){
    echo "Gagal";
    var_dump(mysqli_error($conn));
}
else {
    echo "Berhasil";
}
?>

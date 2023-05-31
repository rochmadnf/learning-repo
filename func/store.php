<?php

require_once '../connection.php';

header('Content-Type: application/json');
header('Accept: application/json');
header('Access-Control-Allow-Origin: *');

$rawBody = file_get_contents("php://input"); // Read body

$data = json_decode($rawBody);
$data->on_time = time();

$result = mysqli_query($conn,
         'INSERT INTO coords_history (user_id, latitude, longitude, accuracy, on_time, from_who)
          VALUES ('.$data->user_id.', '.$data->latitude.', '.$data->longitude.', '.$data->accuracy.','. $data->on_time.', "'. $data->from_who.'")'
          );

if(!$result){
   echo json_encode(['message' => 'Failed storing data', 'body' => mysqli_error($conn)]);
}else{
   echo json_encode(['message' => 'Store data successfully', 'body' => $data]);
}
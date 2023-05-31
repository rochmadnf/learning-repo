<?php

if(isset($_GET['function'])) {
  $_GET['function']();
} else {
    getNumber();
}

function getNumber(){
  $number = rand(0, 1000);
  
  $response = [
    'message' => 'Get number success',
    'data' => $number,
  ];

  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  

  echo json_encode($response);
}
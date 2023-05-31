<?php

require_once '../connection.php';

header('Content-Type: application/json');
header('Accept: application/json');
header('Access-Control-Allow-Origin: *');
if(!is_null($_GET['from'])){
  if($_GET['from'] == "all"){
    $sql = 'SELECT * FROM coords_history ORDER BY id DESC';
  }else{
    $sql = 'SELECT * FROM coords_history WHERE from_who = "' . $_GET['from'] . '"';
  }
}
$data = mysqli_fetch_all(mysqli_query($conn, $sql), MYSQLI_ASSOC);

echo json_encode($data);
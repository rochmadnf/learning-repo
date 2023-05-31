<?php
$data->temperature = (int) $_GET['temperature'];
$data->created_at = time();


header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
// var_dump($data);
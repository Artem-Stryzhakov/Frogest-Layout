<?php
    $getJson = file_get_contents('data.json');

    $json_data = json_decode($getJson,true);
    echo json_encode($json_data);

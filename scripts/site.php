<?php
header('content-type: application/json');

// chemin d'accès à votre fichier JSON
$file = 'https://simplonline-v3-prod.s3.eu-west-3.amazonaws.com/media/file/json/f53395cc-319a-4d63-8000-6ca08dea2762.json';

// mettre le contenu du fichier dans une variable
$data = file_get_contents($file, true);
// décoder le flux JSON
// $obj = json_decode($data);
var_dump($data);

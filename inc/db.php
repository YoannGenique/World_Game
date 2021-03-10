<?php
try{
    $db = new PDO('mysql:host=127.0.0.1;dbname=world_game', 'root','');
    $db->exec('SET NAMES "UTF8"');
}catch (PDOException $e){
    echo 'Erreur : '. $e->getMessage(); 
    die(); 
}

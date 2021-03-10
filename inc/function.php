<?php

include 'bdd.php';

function getAll()
{
    $db = getDb();
    $result = $db->query("SELECT * FROM games");
    $games = $result->fetchall();
    return $games;
}
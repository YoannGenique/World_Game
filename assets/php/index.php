<?php
include ('../../inc/db.php');

$sql = "SELECT * FROM games";

$query=$db->prepare($sql);

$query->execute();

$result = $query->fetchAll(PDO::FETCH_ASSOC);

echo (json_encode($result));
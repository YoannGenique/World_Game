<?php
// Call the function bdd
require '../../inc/db.php';
// Use function bdd
$db = getDb();

if (!empty($_POST)) {
  
  $search = strip_tags($_POST['in_search']);

  $sql = "SELECT * FROM games WHERE game_name || release_date || game_developper || game_publisher LIKE '%'";

  $query->$db->prepare($sql);

  $query->execute();

  $result = $query->fetchAll(PDO::FETCH_ASSOC);

  echo (json_encode($result));
}

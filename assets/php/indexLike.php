<?php
// Call the function bdd
require '../../inc/db.php';
// Use function bdd

  // $search = htmlspecialchars($_POST['in_search']);

  $sql = 'SELECT * FROM games WHERE game_name LIKE "%"';

  $query=$db->prepare($sql);

  $query->execute();

  $result = $query->fetchAll(PDO::FETCH_ASSOC);

  echo (json_encode($result));

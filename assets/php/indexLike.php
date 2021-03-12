<?php
// Call the function bdd
require '../../inc/db.php';
// Use function bdd

  $search = strip_tags($_POST['search']);

  // $sql = 'SELECT * FROM games WHERE game_name LIKE "%"';
  // $sql = 'SELECT * FROM games WHERE game_name LIKE "%'.$search.'%"';
  $sql = 'SELECT DISTINCT * FROM games WHERE game_name LIKE ?';

  $query=$db->prepare($sql); 
  
  $search = "%". $search ."%";

  $query->execute(array($search));

  $result = $query->fetchAll(PDO::FETCH_ASSOC);

  echo (json_encode($result));
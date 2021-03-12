<?php
require '../../inc/db.php';

  $search = strip_tags($_POST['search']);

  $sql = 'SELECT DISTINCT * FROM games WHERE game_name LIKE ?';

  $query=$db->prepare($sql); 
  
  $search = "%". $search ."%";

  $query->execute(array($search));

  $result = $query->fetchAll(PDO::FETCH_ASSOC);

  echo (json_encode($result));
<?php
$connection = mysqli_connect('localhost', 'root', '', 'machu_pikchu');

if($connection == false){
  echo 'Could not connect to database';
  echo mysqli_connect_error;
  exit();
}

 ?>

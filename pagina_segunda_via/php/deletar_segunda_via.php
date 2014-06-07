<?php
$host="localhost";
$user="u889596634_root";
$pass="92153287";
$banco="u889596634_payro";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());


$id=$_POST['id'];

$sql = mysqli_query ($conexao,"DELETE FROM folha WHERE id='$id'") or die(mysql_error());

?>
<?php
$host="localhost";
$user="root";
$pass="";
$banco="payroll_database";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());
?>


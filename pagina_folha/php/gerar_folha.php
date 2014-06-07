<?php
$host="localhost";
$user="u889596634_root";
$pass="92153287";
$banco="u889596634_payro";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());


$competencia=$_POST['competencia'];
$funcionario=$_POST['funcionario'];
$dias_uteis=$_POST['dias_uteis'];
$fds=$_POST['fds'];
$hora_extra_normal=$_POST['hora_extra_normal'];
$hora_extra_fds=$_POST['hora_extra_fds'];
$falta_normal=$_POST['falta_normal'];
$falta_fds=$_POST['falta_fds'];
$add_noturno=$_POST['add_noturno'];
$dependentes=$_POST['dependentes'];
$adiantamento=$_POST['adiantamento'];

$sql = mysqli_query ($conexao,"INSERT INTO folha (competencia, funcionario, dias_uteis, dias_fds, hora_normal, hora_fds, falta_normal, falta_fds, add_noturno, 
	dependentes, adiantamento)
	VALUES('$competencia', '$funcionario', '$dias_uteis', '$fds', '$hora_extra_normal', '$hora_extra_fds', '$falta_normal', '$falta_fds', '$add_noturno', 
		'$dependentes', '$adiantamento')") or die(mysql_error());

?>




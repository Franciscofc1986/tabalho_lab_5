<?php
$host="localhost";
$user="root";
$pass="";
$banco="payroll_database";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());


$id=$_POST['id'];
$competencia=$_POST['competencia'];
$funcionario=$_POST['funcionario'];
$dias_uteis=$_POST['dias_uteis'];
$dias_fds=$_POST['fds'];
$hora_normal=$_POST['hora_extra_normal'];
$hora_fds=$_POST['hora_extra_fds'];
$falta_normal=$_POST['falta_normal'];
$falta_fds=$_POST['falta_fds'];
$add_noturno=$_POST['add_noturno'];
$dependentes=$_POST['dependentes'];
$adiantamento=$_POST['adiantamento'];


$sql = mysqli_query ($conexao,"UPDATE folha SET competencia='$competencia', funcionario='$funcionario', dias_uteis='$dias_uteis', dias_fds='$dias_fds', 
	hora_normal='$hora_normal', hora_fds='$hora_fds', falta_normal='$falta_normal', falta_fds='$falta_fds', add_noturno='$add_noturno', 
	dependentes='$dependentes', adiantamento='$adiantamento' WHERE id='$id'") or die(mysql_error());

?>
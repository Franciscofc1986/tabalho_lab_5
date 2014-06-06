<?php
$host="localhost";
$user="root";
$pass="";
$banco="payroll_database";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());


$campo_emitente=$_POST['campo_emitente'];
$competencia=$_POST['competencia'];
$salario_normal=$_POST['salario_normal'];
$insalubrid=$_POST['insalubrid'];
$periculosid=$_POST['periculosid'];
$add_not=$_POST['add_not'];
$hora_extra=$_POST['hora_extra'];
$hora_fimds=$_POST['hora_fimds'];
$salar_familia=$_POST['salar_familia'];
$dsr_remunerado=$_POST['dsr_remunerado'];
$inss=$_POST['inss'];
$faltass=$_POST['faltass'];
$imposto=$_POST['imposto'];
$adiantament=$_POST['adiantament'];
$vale_trans=$_POST['vale_trans'];


$sql = mysqli_query ($conexao,"INSERT INTO recibo (emitente, competencia, salario_normal, insalubridade, periculosidade, add_noturno, horas_extras, horas_fds, salario_familia, dsr, inss, faltas, ir, adiantamento, vale_transporte)
	VALUES('$campo_emitente', '$competencia', '$salario_normal', '$insalubrid', '$periculosid', '$add_not', '$hora_extra', '$hora_fimds', '$salar_familia', '$dsr_remunerado', '$inss', '$faltass', '$imposto', '$adiantament', '$vale_trans')") or die(mysql_error());

?>




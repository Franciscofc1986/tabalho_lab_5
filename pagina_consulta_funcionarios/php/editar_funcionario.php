<?php
$host="localhost";
$user="u889596634_root";
$pass="92153287";
$banco="u889596634_payro";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());


$id=$_POST['id'];
$nome=$_POST['nome'];
$admissao=$_POST['admissao'];
$telefone=$_POST['telefone'];
$sexo=$_POST['sexo'];
$cpf=$_POST['cpf'];
$rg=$_POST['rg'];
$pis=$_POST['pis'];
$funcao=$_POST['funcao'];
$setor=$_POST['setor'];
$salario=$_POST['salario'];
$vale_transporte=$_POST['vale_transporte'];
$insalubridade=$_POST['insalubridade'];
$periculosidade=$_POST['periculosidade'];



$sql = mysqli_query ($conexao,"UPDATE funcionarios SET nome='$nome', admissao='$admissao', telefone='$telefone', sexo='$sexo', cpf='$cpf', rg='$rg', pis='$pis', funcao='$funcao', setor='$setor', salario='$salario', vale_transporte='$vale_transporte', insalubridade='$insalubridade', periculosidade='$periculosidade' WHERE id='$id'") or die(mysql_error());

?>
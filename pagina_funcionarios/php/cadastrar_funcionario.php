<?php
$host="localhost";
$user="u889596634_root";
$pass="92153287";
$banco="u889596634_payro";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());

$nome=$_POST['nome'];
$admissao=$_POST['admissao'];
$data = implode("-", array_reverse(explode("/", $admissao)));
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

$sql = mysqli_query ($conexao,"INSERT INTO funcionarios (nome, admissao, telefone, sexo, cpf, rg, pis, funcao, setor, salario, vale_transporte, insalubridade, periculosidade)
	VALUES('$nome', '$data', '$telefone', '$sexo', '$cpf', '$rg', '$pis', '$funcao', '$setor', '$salario', '$vale_transporte', '$insalubridade', '$periculosidade')") or die(mysql_error());

?>




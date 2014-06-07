<?php
$host="localhost";
$user="u889596634_root";
$pass="92153287";
$banco="u889596634_payro";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());


$nome_fantasia=$_POST['nome_fantasia'];
$codigo=$_POST['codigo'];
$razao_social=$_POST['razao_social'];
$cnpj=$_POST['cnpj'];
$ie=$_POST['ie'];
$tel=$_POST['tel'];
$logradouro=$_POST['logradouro'];
$num=$_POST['num'];
$bairro=$_POST['bairro'];
$cidade=$_POST['cidade'];
$uf=$_POST['uf'];
$cep=$_POST['cep'];
$email=$_POST['email'];


$sql = mysqli_query ($conexao,"INSERT INTO emitentes (nome_fantasia, codigo, razao_social, cnpj, ie, telefone, logradouro, numero, bairro, cidade, uf, cep, email)
	VALUES('$nome_fantasia', '$codigo', '$razao_social', '$cnpj', '$ie', '$tel', '$logradouro', '$num', '$bairro', '$cidade', '$uf', '$cep', '$email')") or die(mysql_error());

?>




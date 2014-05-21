<?php
$host="localhost";
$user="root";
$pass="";
$banco="payroll_database";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());


$id=$_POST['id'];
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



$sql = mysqli_query ($conexao,"UPDATE emitentes SET nome_fantasia='$nome_fantasia', codigo='$codigo', razao_social='$razao_social', cnpj='$cnpj', ie='$ie', telefone='$tel', logradouro='$logradouro', numero='$num', bairro='$bairro', cidade='$cidade', uf='$uf', cep='$cep', email='$email' WHERE id='$id'") or die(mysql_error());

?>
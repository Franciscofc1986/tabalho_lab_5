<?php
$host="localhost";
$user="u889596634_root";
$pass="92153287";
$banco="u889596634_payro";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());

$array = array();

$sql="SELECT cnpj, nome_fantasia FROM emitentes";


$result = mysqli_query($conexao, $sql);
	while ($row = mysqli_fetch_array($result)){
	$array[]= array('cnpj'=> $row['cnpj'],'nome_fantasia'=> $row['nome_fantasia']);

}
echo json_encode($array);

?>
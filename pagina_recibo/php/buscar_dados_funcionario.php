<?php
$host="localhost";
$user="u889596634_root";
$pass="92153287";
$banco="u889596634_payro";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());

$array = array();

$sql="SELECT func.funcao, func.salario, func.insalubridade, func.periculosidade , func.vale_transporte 
FROM funcionarios AS func LEFT JOIN folha AS fol ON func.nome LIKE fol.funcionario ORDER BY fol.id DESC LIMIT 1";

$result = mysqli_query($conexao, $sql);

while ($row = mysqli_fetch_array($result)) {
	$array[]= array('funcao'=> $row['funcao'],'salario'=> $row['salario'], 'insalubridade'=> $row['insalubridade'], 
		'periculosidade'=> $row['periculosidade'], 'vale_transporte'=> $row['vale_transporte']);
}
echo json_encode($array);

?>
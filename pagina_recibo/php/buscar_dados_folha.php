<?php
$host="localhost";
$user="root";
$pass="";
$banco="payroll_database";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());

$array = array();

$sql="SELECT competencia, funcionario, add_noturno, hora_normal, hora_fds, dependentes, adiantamento FROM folha ORDER BY id DESC LIMIT 1";


$result = mysqli_query($conexao, $sql);

while ($row = mysqli_fetch_array($result)) {
	$array[]= array('competencia'=> $row['competencia'],'funcionario'=> $row['funcionario'], 'add_noturno'=> $row['add_noturno'],
		'hora_normal'=> $row['hora_normal'], 'hora_fds'=> $row['hora_fds'], 'dependentes'=> $row['dependentes'], 
		'adiantamento'=> $row['adiantamento']);
}
echo json_encode($array);

?>
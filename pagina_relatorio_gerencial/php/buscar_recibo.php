<?php 
include('conexao.php');

$array = array();
 $competencia = $_GET["campo_competencia"];
 
$sql = "SELECT * FROM recibo WHERE competencia like '$competencia'";

$result = mysqli_query($conexao, $sql );

while ($row = mysqli_fetch_array($result)) {
	$array[]= array('emitente'=> $row['emitente'], 'competencia'=> $row['competencia'], 'salario_normal'=> $row['salario_normal'], 
		'insalubridade'=> $row['insalubridade'], 'periculosidade'=> $row['periculosidade'], 'add_noturno'=> $row['add_noturno'], 
		'horas_extras'=> $row['horas_extras'], 'horas_fds'=> $row['horas_fds'], 'salario_familia'=> $row['salario_familia'],
		'dsr'=> $row['dsr'], 'inss'=> $row['inss'], 'faltas'=> $row['faltas'], 'ir'=> $row['ir'], 'adiantamento'=> $row['adiantamento'],
		'vale_transporte'=> $row['vale_transporte']);
}

echo json_encode($array);
?>

<?php 
include('conexao.php');


$array = array();

$sql = 'SELECT nome FROM funcionarios ORDER BY nome ASC';

$result = mysqli_query($conexao, $sql );

while ($row = mysqli_fetch_array($result)) {
	$array[]= array('nome'=> $row['nome']);
}

echo json_encode($array);

?>




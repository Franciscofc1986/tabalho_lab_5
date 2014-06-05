<?php 
include('conexao.php');


$array = array();

$sql = "SELECT id FROM emitentes";

$result = mysqli_query($conexao, $sql);
	while ($row = mysqli_fetch_array($result)){
	$array[]= array('id'=> $row['id']);

}

echo json_encode($array);

?>




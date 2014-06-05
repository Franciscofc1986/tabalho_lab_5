<?php
$host="localhost";
$user="root";
$pass="";
$banco="payroll_database";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());

$array = array();

$sql = "SELECT id FROM folha";

$result = mysqli_query($conexao, $sql);
    while ($row = mysqli_fetch_array($result)){
    $array[]= array('id'=> $row['id']);

}

echo json_encode($array);

?>



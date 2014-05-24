<?php
$host="localhost";
$user="root";
$pass="";
$banco="payroll_database";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());

  //Consulta com a tabela
  //Selecione tudo de nomedatabela em ordem crescente pelo nome 
  $consulta=mysqli_query($conexao,"SELECT nome FROM funcionarios order by nome ASC"); 


  //Fazendo o looping para exibição de todos registros que contiverem em nomedatabela
  while ($dados = mysqli_fetch_array($consulta)) {
  echo("<option value='".$dados['nome']."'>"."</option>");
  }

?>

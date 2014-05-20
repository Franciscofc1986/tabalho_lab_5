<?php
if (isset($_GET["txtnome"])) {
    $nome = $_GET["txtnome"];
$host="localhost";
$user="root";
$pass="";
$banco="payroll_database";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());

// Verifica se a variável está vazia

if (empty($nome)) {
$sql = "SELECT * FROM funcionarios";
} else {
	$nome .= "%";
        $sql = "SELECT * FROM funcionarios WHERE nome like '$nome'";
    }
sleep(1);
$result = mysqli_query($conexao,$sql);
    $cont = mysqli_affected_rows($conexao);
    // Verifica se a consulta retornou linhas 
    if ($cont > 0) {
        // Atribui o código HTML para montar uma tabela
        $tabela = "<table class='tabelaEditavel' border='1'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Admissao</th>
                            <th>Telefone</th>
                            <th>Sexo</th>
                            <th>CPF</th>
                            <th>RG</th>
                            <th>PIS</th>
                            <th>Função</th>
                            <th>Setor</th>
                            <th>Salário</th>
                            <th>Vale-Transporte</th>
                            <th>Insalubridade</th>
                            <th>Periculosidade</th>
                            <th>E/D</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>";
        $return = "$tabela";
        $textbox = "<input type='checkbox' name='marcar' onClick='valida_checkbox()' />";

        // Captura os dados da consulta e inseri na tabela HTML
        while ($linha = mysqli_fetch_array($result)) {
            $return.= "<td>" . utf8_encode($linha["nome"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["admissao"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["telefone"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["sexo"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["cpf"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["rg"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["pis"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["funcao"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["setor"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["salario"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["vale_transporte"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["insalubridade"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["periculosidade"]) . "</td>";
            $return.= "<td>" . ($textbox) . "</td>";
            $return.= "</tr>";
        }
        echo $return.="</tbody></table>";
    } else {
        // Se a consulta não retornar nenhum valor, exibi mensagem para o usuário
        echo "Não foram encontrados registros!";
    }
}

?>



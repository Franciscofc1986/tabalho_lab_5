<?php
if (isset($_GET["txtnome"])) {
    $nome = $_GET["txtnome"];
$host="localhost";
$user="u889596634_root";
$pass="92153287";
$banco="u889596634_payro";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());

// Verifica se a variável está vazia
if (empty($nome)) {
$sql = "SELECT * FROM funcionarios ORDER BY nome ASC" ;
} else {
	$nome .= "%";
        $sql = "SELECT * FROM funcionarios WHERE nome like '$nome' ORDER BY nome ASC";
    }
$result = mysqli_query($conexao,$sql);
    $cont = mysqli_affected_rows($conexao);
    // Verifica se a consulta retornou linhas 
    if ($cont > 0) {
        // Atribui o código HTML para montar uma tabela
        $tabela = "<table id='tabelaEditavel' border='1'>
                    <thead>
                        <tr>
                            <th style='display:none'>ID</th>
                            <th>Nome</th>
                            <th>Admissão</th>
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
            $return.= "<td id='campo_id' style='display:none'>".($linha["id"]) . "</td>";
            $return.= "<td id='campo_nome'>" . ($linha["nome"]) . "</td>";
            $return.= "<td id='campo_admissao'>" . implode("/", array_reverse(explode("-", ($linha["admissao"])))) . "</td>";
            $return.= "<td id='campo_telefone'>" . ($linha["telefone"]) . "</td>";
            $return.= "<td id='campo_sexo'>" . ($linha["sexo"]) . "</td>";
            $return.= "<td id='campo_cpf'>" . ($linha["cpf"]) . "</td>";
            $return.= "<td id='campo_rg'>" . ($linha["rg"]) . "</td>";
            $return.= "<td id='campo_pis'>" . ($linha["pis"]) . "</td>";
            $return.= "<td id='campo_funcao'>" . ($linha["funcao"]) . "</td>";
            $return.= "<td id='campo_setor'>" . ($linha["setor"]) . "</td>";
            $return.= "<td id='campo_salario'>" . ($linha["salario"]) . "</td>";
            $return.= "<td id='campo_vale_transporte'>" . ($linha["vale_transporte"]) . "</td>";
            $return.= "<td id='campo_insalubridade'>" . ($linha["insalubridade"]) . "</td>";
            $return.= "<td id='campo_periculosidade'>" . ($linha["periculosidade"]) . "</td>";
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



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
$sql = "SELECT * FROM folha";
} else {
	$nome .= "%";
        $sql = "SELECT * FROM folha WHERE funcionario like '$nome'";
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
                            <th class='sub'>Competência</th>
                            <th class='sub'>Funcionário</th>
                            <th class='sub'>Dias Úteis</th>
                            <th class='sub'>Dias F.D.S</th>
                            <th class='sub'>Hora Normal</th>
                            <th class='sub'>Hora F.D.S</th>
                            <th class='sub'>Falta Normal</th>
                            <th class='sub'>Falta F.D.S</th>
                            <th class='sub'>Adc. Noturno</th>
                            <th class='sub'>Dependentes</th>
                            <th class='sub'>Adiantamento</th>
                            <th class='sub'>E/D</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>";

        $textbox = "<input type='checkbox' name='marcar' onClick='valida_checkbox()'/>";
        $return = "$tabela";
        // Captura os dados da consulta e inseri na tabela HTML
        while ($linha = mysqli_fetch_array($result)) {
            $return.= "<td id='campo_id' style='display:none'>" . ($linha["id"]) . "</td>";
            $return.= "<td id='campo_competencia'>" . ($linha["competencia"]) . "</td>";
            $return.= "<td id='campo_funcionario'>" . ($linha["funcionario"]) . "</td>";
            $return.= "<td id='campo_dias_uteis'>" . ($linha["dias_uteis"]) . "</td>";
            $return.= "<td id='campo_dias_fds'>" . ($linha["dias_fds"]) . "</td>";
            $return.= "<td id='campo_hora_normal'>" . ($linha["hora_normal"]) . "</td>";
            $return.= "<td id='campo_hora_fds'>" . ($linha["hora_fds"]) . "</td>";
            $return.= "<td id='campo_falta_normal'>" . ($linha["falta_normal"]) . "</td>";
            $return.= "<td id='campo_falta_fds'>" . ($linha["falta_fds"]) . "</td>";
            $return.= "<td id='campo_add_noturno'>" . ($linha["add_noturno"]) . "</td>";
            $return.= "<td id='campo_dependentes'>" . ($linha["dependentes"]) . "</td>";
            $return.= "<td id='campo_adiantamento'>" . ($linha["adiantamento"]) . "</td>";
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



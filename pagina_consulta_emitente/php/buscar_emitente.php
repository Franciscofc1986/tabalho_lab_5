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
$sql = "SELECT * FROM emitentes";
} else {
	$nome .= "%";
        $sql = "SELECT * FROM emitentes WHERE nome_fantasia like '$nome'";
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
                            <th class='sub'>Nome Fant.</th>
                            <th class='sub'>Código</th>
                            <th class='sub'>Razão Social</th>
                            <th class='sub'>CNPJ</th>
                            <th class='sub'>I.E.</th>
                            <th class='sub'>Telefone</th>
                            <th class='sub'>Logradouro</th>
                            <th class='sub'>Num.</th>
                            <th class='sub'>Bairro</th>
                            <th class='sub'>Cidade</th>
                            <th class='sub'>UF</th>
                            <th class='sub'>CEP</th>
                            <th class='sub'>Email</th>
                            <th class='sub'>E/D</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>";

        $textbox = "<input type='checkbox' name='marcar' onClick='valida_checkbox()'/>";
        $return = "$tabela";
        // Captura os dados da consulta e inseri na tabela HTML
        while ($linha = mysqli_fetch_array($result)) {
            $return.= "<td id='campo_id' style='display:none'>" . utf8_encode($linha["id"]) . "</td>";
            $return.= "<td id='campo_nome_fantasia'>" . utf8_encode($linha["nome_fantasia"]) . "</td>";
            $return.= "<td id='campo_codigo'>" . utf8_encode($linha["codigo"]) . "</td>";
            $return.= "<td id='campo_razao_social'>" . utf8_encode($linha["razao_social"]) . "</td>";
            $return.= "<td id='campo_cnpj'>" . utf8_encode($linha["cnpj"]) . "</td>";
            $return.= "<td id='campo_ie'>" . utf8_encode($linha["ie"]) . "</td>";
            $return.= "<td id='campo_telefone'>" . utf8_encode($linha["telefone"]) . "</td>";
            $return.= "<td id='campo_logradouro'>" . utf8_encode($linha["logradouro"]) . "</td>";
            $return.= "<td id='campo_num'>" . utf8_encode($linha["numero"]) . "</td>";
            $return.= "<td id='campo_bairro'>" . utf8_encode($linha["bairro"]) . "</td>";
            $return.= "<td id='campo_cidade'>" . utf8_encode($linha["cidade"]) . "</td>";
            $return.= "<td id='campo_uf'>" . utf8_encode($linha["uf"]) . "</td>";
            $return.= "<td id='campo_cep'>" . utf8_encode($linha["cep"]) . "</td>";
            $return.= "<td id='campo_email'>" . utf8_encode($linha["email"]) . "</td>";
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



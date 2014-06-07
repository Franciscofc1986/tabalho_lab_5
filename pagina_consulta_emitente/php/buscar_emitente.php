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
                            <th class='sub'>E</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>";

        $textbox = "<input type='checkbox' name='marcar' onClick='valida_checkbox()'/>";
        $return = "$tabela";
        // Captura os dados da consulta e inseri na tabela HTML
        while ($linha = mysqli_fetch_array($result)) {
            $return.= "<td id='campo_id' style='display:none'>" . ($linha["id"]) . "</td>";
            $return.= "<td id='campo_nome_fantasia'>" . ($linha["nome_fantasia"]) . "</td>";
            $return.= "<td id='campo_codigo'>" . ($linha["codigo"]) . "</td>";
            $return.= "<td id='campo_razao_social'>" . ($linha["razao_social"]) . "</td>";
            $return.= "<td id='campo_cnpj'>" . ($linha["cnpj"]) . "</td>";
            $return.= "<td id='campo_ie'>" . ($linha["ie"]) . "</td>";
            $return.= "<td id='campo_telefone'>" . ($linha["telefone"]) . "</td>";
            $return.= "<td id='campo_logradouro'>" . ($linha["logradouro"]) . "</td>";
            $return.= "<td id='campo_num'>" . ($linha["numero"]) . "</td>";
            $return.= "<td id='campo_bairro'>" . ($linha["bairro"]) . "</td>";
            $return.= "<td id='campo_cidade'>" . ($linha["cidade"]) . "</td>";
            $return.= "<td id='campo_uf'>" . ($linha["uf"]) . "</td>";
            $return.= "<td id='campo_cep'>" . ($linha["cep"]) . "</td>";
            $return.= "<td id='campo_email'>" . ($linha["email"]) . "</td>";
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



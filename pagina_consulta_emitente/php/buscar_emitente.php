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
sleep(1);
$result = mysqli_query($conexao,$sql);
    $cont = mysqli_affected_rows($conexao);
    // Verifica se a consulta retornou linhas 
    if ($cont > 0) {
        // Atribui o código HTML para montar uma tabela
        $tabela = "<table class='tabelaEditavel' border='1'>
                    <thead>
                        <tr>
                            <th>Nome Fant.</th>
                            <th>Código</th>
                            <th>Razão Social</th>
                            <th>CNPJ</th>
                            <th>I.E.</th>
                            <th>Telefone</th>
                            <th>Logradouro</th>
                            <th>Num.</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>CEP</th>
                            <th>Email</th>
                            <th>E/D</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>";

        $textbox = "<input type='checkbox' name='marcar' onClick='valida_checkbox()'/>";
        $return = "$tabela";
        // Captura os dados da consulta e inseri na tabela HTML
        while ($linha = mysqli_fetch_array($result)) {
            $return.= "<td>" . utf8_encode($linha["nome_fantasia"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["codigo"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["razao_social"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["cnpj"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["ie"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["telefone"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["logradouro"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["numero"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["bairro"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["cidade"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["uf"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["cep"]) . "</td>";
            $return.= "<td>" . utf8_encode($linha["email"]) . "</td>";
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



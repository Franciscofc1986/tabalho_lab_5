<?php
$host="localhost";
$user="root";
$pass="";
$banco="payroll_database";

$conexao = mysqli_connect($host, $user, $pass) or die(mysql_error());
mysqli_select_db($conexao,$banco) or die(mysql_error());

 $sql = "SELECT * FROM usuarios";


$result = mysqli_query($conexao,$sql);
    $cont = mysqli_affected_rows($conexao);
    // Verifica se a consulta retornou linhas 
    if ($cont > 0) {
        // Atribui o código HTML para montar uma tabela
        $tabela = "<table id='tabelaEditavel' border='1'>
                    <thead>
                        <tr>
                            <th style='display:none'>ID</th>
                            <th class='sub'>Login.</th>
                            <th class='sub'>Senha</th>
                            <th class='sub'>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>";

        $textbox = "<input type='checkbox' name='marcar' onClick='valida_checkbox()'/>";
        $return = "$tabela";
        // Captura os dados da consulta e inseri na tabela HTML
        while ($linha = mysqli_fetch_array($result)) {
            $return.= "<td id='campo_id' style='display:none'>" . ($linha["id"]) . "</td>";
            $return.= "<td id='campo_login'>" . ($linha["login"]) . "</td>";
            $return.= "<td id='campo_senha'>" . ($linha["senha"]) . "</td>";
            $return.= "<td>" . ($textbox) . "</td>";
            $return.= "</tr>";
           
        }
        echo $return.="</tbody></table>";
    } else {
        // Se a consulta não retornar nenhum valor, exibi mensagem para o usuário
        echo "Não foram encontrados registros!";
    }


?>



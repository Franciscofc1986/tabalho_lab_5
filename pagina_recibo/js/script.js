function pagina_principal(){
	window.location = '../pagina_inicial/pagina_inicial.html';	
}
function empresas(){
	window.location = '../pagina_empresas/index.html';
}
function buscar_emitentes(){
    window.location = '../pagina_consulta_emitente/index.html';
}
function funcionarios(){

	window.location = '../pagina_funcionarios/index.html';
}
function buscar_funcionarios(){
	window.location = '../pagina_consulta_funcionarios/index.html';
}
function folha(){
	window.location = '../pagina_folha/index.html';
}
function segunda_via(){
  window.location = '../pagina_segunda_via/index.html';
}
function relatorio(){
    window.location = '../pagina_relatorio_gerencial/index.html';
}
function suporte(){
	alert(' FNS Developers emails de contato:\nnicolashenrique2@hotmail.com\nfrancielegarcia38@yahoo.com.br\nsbaneto@yahoo.com.br')
}
function login(){
	if(confirm('Você tem certeza que quer sair do sistema?'))
		window.location = '../index.html';
	//else (alert('OK, esta janela não será fechada ainda.'))
}

function voltar(){
  if(confirm('Você tem certeza que quer sair desta página?'))
   folha();
}

function buscar_recibo(){
    $.getJSON('php/buscar_dados_emitentes.php', function (dados){
       if (dados.length > 0){   
        for($i=0; $i < dados.length; $i++){
            // coloco o nome e sobre nome
               $("#campo_cnpj").val(dados[$i].cnpj);
            // coloco a cidade
                $("#campo_emitente").val(dados[$i].nome_fantasia);
            }
}
});
   $.getJSON('php/buscar_dados_folha.php', function (dados){
       if (dados.length > 0){   
        for($i=0; $i < dados.length; $i++){
            // coloco o nome e sobre nome
            $("#campo_referencia_salario").val('30');
               $("#campo_competencia").val(dados[$i].competencia);
                $("#campo_funcionario").val(dados[$i].funcionario);
                $("#campo_referencia_add").val(dados[$i].add_noturno);
                $("#campo_referencia_hora_extra").val(dados[$i].hora_normal);
                $("#campo_referencia_fds").val(dados[$i].hora_fds);
                $("#campo_referencia_salario_familia").val(dados[$i].dependentes);
                $("#campo_desconto_adiantamento").val(dados[$i].adiantamento);
            }
        }
    });


   $.getJSON('php/buscar_dados_funcionario.php', function (dados){
       if (dados.length > 0){   
        for($i=0; $i < dados.length; $i++){
            // coloco o nome e sobre nome
               $("#campo_funcao").val(dados[$i].funcao);
                $("#campo_vencimento_salario").val(dados[$i].salario);
                $("#campo_referencia_insalubridade").val(dados[$i].insalubridade);
                $("#campo_referencia_periculosidade").val(dados[$i].periculosidade);
                $("#campo_referencia_vale_transporte").val(dados[$i].vale_transporte);
            }
        }
    }); 
    }
var form=document.formulario;
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

function pagina_recibo(){
  window.location = '../pagina_recibo/index.html';
}

function carrega_competencia(){
	competencia = prompt('Digite a competência:');
	if (competencia==null){
		//alert("voltando!");
		window.history.back();
	}
	else{
    	if(competencia.length>0){
    	form.campo_competencia.value=competencia;
		}
	}

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
	if(confirm('Você tem certeza que quer sair da página?'))
		pagina_principal();
}


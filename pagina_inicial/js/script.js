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
function relatorio(){
	alert('não implementado(ainda!)')
}
function suporte(){
	alert(' FNS Developers emails de contato:\nnicolashenrique2@hotmail.com\nfrancielegarcia38@yahoo.com.br\nsbaneto@yahoo.com.br')
}
function login(){
	if(confirm('Você tem certeza que quer sair do sistema?'))
		window.location = '../index.html';
	//else (alert('OK, esta janela não será fechada ainda.'))
}
/*
<a href="javascript:void();" onclick="login()" id ="item7" class="top_link"><span class="down">Logout</span></a>
			<ul class="sub">
			<li><a href="javascript:void();" onclick="fechar()">Fechar</a></li>	


function fechar(){
	if(confirm('Você tem certeza que quer fechar a janela?'))
		window.close('_parent');
	//else (alert('OK, esta janela não será fechada ainda.'))
}*/

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

function inserir_registro(){
  if (document.getElementById('campo_nome_fantasia') .value.length<4){
    alert("Preencha o nome fantasia corretamente.");
    document.getElementById('campo_nome_fantasia').focus();
    return false;
    }
  if (document.getElementById('campo_razao_social').value.length<4){
    alert("Preencha a Razão Social corretamente.");
    document.getElementById('campo_razao_social').focus();
    return false;
    }
  if (document.getElementById('campo_cnpj').value==""||!IsNum(document.getElementById('campo_cnpj').value)) {
    alert("Preencha o CNPJ corretamente.");
    document.getElementById('campo_cnpj').focus();
    return false;
  }
  if (document.getElementById('campo_ie').value==""||!IsNum(document.getElementById('campo_ie').value)) {
    alert("Preencha a Inscrição Estadual corretamente.");
    document.getElementById('campo_ie').focus();
    return false;
  }
  if (document.getElementById('campo_telefone').value==""||!IsNum(document.getElementById('campo_telefone').value)) {
    alert("Preencha o telefone corretamente.");
    document.getElementById('campo_telefone').focus();
    return false;
  }
  if (document.getElementById('campo_logradouro').value==""||document.getElementById('campo_logradouro').value.length<5) {
    alert("Preencha o endereço corretamente.");
    document.getElementById('campo_logradouro').focus();
    return false;
  }
  if (document.getElementById('campo_num').value==""||document.getElementById('campo_num').value.length<1) {
    alert("Preencha o numero corretamente.");
    document.getElementById('campo_num').focus();
    return false;
  }
  if (document.getElementById('campo_bairro').value==""||document.getElementById('campo_bairro').value.length<5) {
    alert("Preencha o bairro corretamente.");
    document.getElementById('campo_bairro').focus();
    return false;
  }
    //dados a enviar, vai buscar os valores dos campos que queremos enviar para a BD
    var dadosajax = {
      
          'nome_fantasia' : $("#campo_nome_fantasia").val(),
       'codigo' : $("#campo_codigo").val(),
'razao_social' : $("#campo_razao_social").val(),
'cnpj' : $("#campo_cnpj").val(),
'ie' : $("#campo_ie").val(),  
'tel' : $("#campo_telefone").val(), 
'logradouro' : $("#campo_logradouro").val(),
'num' : $("#campo_num").val(),
'bairro' : $("#campo_bairro").val(),
'cidade' : $("#campo_cidade").val(),
'uf' : $("#campo_uf").val(),
'cep' : $("#campo_cep").val(),
'email' : $("#campo_email").val(),
    };
    pageurl = 'php/cadastrar_emitente.php';
    //para consultar mais opcoes possiveis numa chamada ajax
    //http://api.jquery.com/jQuery.ajax/
    $.ajax({
 
        //url da pagina
        url: pageurl,
        //parametros a passar
        data: dadosajax,
        //tipo: POST ou GET
        type: 'POST',
        //cache
        cache: false,
        //se ocorrer um erro na chamada ajax, retorna este alerta
        //possiveis erros: pagina nao existe, erro de codigo na pagina, falha de comunicacao/internet, etc etc etc
        error: function(){
            alert('Erro: Inserir Registo!!');
        },
        //retorna o resultado da pagina para onde enviamos os dados
        success: function(result)
        {
            //se foi inserido com sucesso
            if($.trim(result) != '1')
            {
alert("Emitente inserido com sucesso!");
               document.getElementById('campo_nome_fantasia').value="";
               document.getElementById('campo_codigo').value="";
               document.getElementById('campo_razao_social').value="";
               document.getElementById('campo_cnpj').value="";
               document.getElementById('campo_ie').value="";
               document.getElementById('campo_telefone').value="";
               document.getElementById('campo_logradouro').value="";
               document.getElementById('campo_num').value="";
               document.getElementById('campo_bairro').value="";
               document.getElementById('campo_cidade').value="";
               document.getElementById('campo_uf').value="";
               document.getElementById('campo_cep').value="";
               document.getElementById('campo_email').value="";
            }
            //se foi um erro
            else
            {
             alert("Não foi possível inserir o Emitente!");
           document.getElementById('campo_nome_fantasia').value="";
               document.getElementById('campo_codigo').value="";
               document.getElementById('campo_razao_social').value="";
               document.getElementById('campo_cnpj').value="";
               document.getElementById('campo_ie').value="";
               document.getElementById('campo_telefone').value="";
               document.getElementById('campo_logradouro').value="";
               document.getElementById('campo_num').value="";
               document.getElementById('campo_bairro').value="";
               document.getElementById('campo_cidade').value="";
               document.getElementById('campo_uf').value="";
               document.getElementById('campo_cep').value="";
               document.getElementById('campo_email').value="";
            }
 
        }
    });
}
function IsNum(v){
   var ValidChars = "0123456789";
   var IsNumber=true;
   var Char;

 
   for (i = 0; i < v.length && IsNumber == true; i++) 
      { 
      Char = v.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
         {
         IsNumber = false;
         }
      }
   return IsNumber;
   
}
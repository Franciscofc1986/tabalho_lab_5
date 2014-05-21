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

/**
  * Função para criar um objeto XMLHTTPRequest
  */
 function CriaRequest() {
     try{
         request = new XMLHttpRequest();        
     }catch (IEAtual){
         
         try{
             request = new ActiveXObject("Msxml2.XMLHTTP");       
         }catch(IEAntigo){
         
             try{
                 request = new ActiveXObject("Microsoft.XMLHTTP");          
             }catch(falha){
                 request = false;
             }
         }
     }
     
     if (!request) 
         alert("Seu Navegador não suporta Ajax!");
     else
         return request;
 }
 
 /**
  * Função para enviar os dados
  */
 function getDados() {
     
     // Declaração de Variáveis
     var nome   = document.getElementById("txtnome").value;
     var result = document.getElementById("tabela");
     var xmlreq = CriaRequest();
     
     // Iniciar uma requisição
     xmlreq.open("GET", "php/buscar_funcionario.php?txtnome=" + nome, true);

     // Atribui uma função para ser executada sempre que houver uma mudança de ado
     xmlreq.onreadystatechange = function(){
         
         // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
         if (xmlreq.readyState == 4) {
             
             // Verifica se o arquivo foi encontrado com sucesso
             if (xmlreq.status == 200) {
                 result.innerHTML = xmlreq.responseText;
             }else{
                 result.innerHTML = "Erro: " + xmlreq.statusText;
             }
         }
     };
     xmlreq.send(null);
 }


function valida_checkbox() {
    if (jQuery("input[name='marcar']:checked")) {
        
        $(function () {
    $("td").dblclick(function () {
        var conteudoOriginal = $(this).text();
        
        $(this).addClass("celulaEmEdicao");
        $(this).html("<input type='text' value='" + conteudoOriginal + "' />");
        $(this).children().first().focus();

        $(this).children().first().keypress(function (e) {
            if (e.which == 13) {
                var novoConteudo = $(this).val();
                $(this).parent().text(novoConteudo);
                $(this).parent().removeClass("celulaEmEdicao");
            }
        });
        
    $(this).children().first().blur(function(){
        $(this).parent().text(conteudoOriginal);
        $(this).parent().removeClass("celulaEmEdicao");
    });
    });
});        
    } else {
        alert("Marque pelo menos um equipamento!");
        return false;
    }
}

function editar_registro(){
 
    //dados a enviar, vai buscar os valores dos campos que queremos enviar para a BD
    var dadosajax = {
      
          'id' : $("#campo_id").text(),
          'nome' : $("#campo_nome").text(),     
          'admissao' : $("#campo_admissao").text(),
          'telefone' : $("#campo_telefone").text(),
          'sexo' : $("#campo_sexo").text(),
          'cpf' : $("#campo_cpf").text(),        
          'rg' : $("#campo_rg").text(), 
          'pis' : $("#campo_pis").text(),         
          'funcao' : $("#campo_funcao").text(),
          'setor' : $("#campo_setor").text(),
          'salario' : $("#campo_salario").text(),
          'vale_transporte' : $("#campo_vale_transporte").text(),
          'insalubridade' : $("#campo_insalubridade").text(),
          'periculosidade'   : $("#campo_periculosidade").text(),
    };
    pageurl = 'php/editar_funcionario.php';
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
            alert('Erro: Atualizar Registo!!');
        },
        //retorna o resultado da pagina para onde enviamos os dados
        success: function(result)
        { 
            //se foi inserido com sucesso
            if($.trim(result) != '1')
            {
               alert("Funcionario atualizado com sucesso!");
             
            }
            //se foi um erro
            else
            {
             alert("Não foi possível atualizar o Funcionario!");
           
            }
 
        }
    });
}

function deletar_registro(){
 
    //dados a enviar, vai buscar os valores dos campos que queremos enviar para a BD
    var dadosajax = {
      
          'id' : $("#campo_id").text(),
    };
    pageurl = 'php/deletar_funcionario.php';
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
            alert('Erro: Deletar Registo!!');
        },
        //retorna o resultado da pagina para onde enviamos os dados
        success: function(result)
        { 
            //se foi inserido com sucesso
            if($.trim(result) != '1')
            {
               alert("Funcionario deletado com sucesso!");
               getDados();
             
            }
            //se foi um erro
            else
            {
             alert("Não foi possível deletar o Funcionario!");
           
            }
 
        }
    });
}

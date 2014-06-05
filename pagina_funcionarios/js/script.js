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
function senha(){
     window.location = '../pagina_editar_senha/index.html';
}
function suporte(){
	alert(' FNS Developers emails de contato:\nnicolashenrique2@hotmail.com\nfrancielegarcia38@yahoo.com.br\nsbaneto@yahoo.com.br')
}
function login(){
	if(confirm('Você tem certeza que quer sair do sistema?'))
		window.location = '../index.html';
	//else (alert('OK, esta janela não será fechada ainda.'))
}

function campos(){
  if($('#campo_nome').val() == "" || $("#campo_admissao").val() == "" || $("#campo_telefone").val() == "" || $("#campo_cpf").val() == "" || $("#campo_rg").val() == "" || $("#campo_pis").val() == "" || $("#campo_funcao").val() == "" || $("#campo_setor").val() == "" || $("#campo_salario").val() == "" || $("#campo_vale_transporte").val() == "" || $("#campo_insalubridade").val() == ""){
    alert('Por favor, preencha todos os campos!');
  }else{
    validar();
  }
}

function validar(){
    $.getJSON('php/buscar_emitente.php', function (dados){
       if (dados.length < 1){   
          alert('Não existe nenhum emitente cadastrado no sistema! Por favor, cadastre o emitente!');
       }else{
         if (dados.length > 0){
          inserir_registo();
         }
       }
    });
}

function inserir_registo(){
 
    //dados a enviar, vai buscar os valores dos campos que queremos enviar para a BD
    var dadosajax = {
      
          'nome' : $("#campo_nome").val(),     
          'admissao' : $("#campo_admissao").val(),
        'telefone' : $("#campo_telefone").val(),
        'sexo' : $("#campo_sexo option:selected").text(),
        'cpf' : $("#campo_cpf").val(),        
        'rg' : $("#campo_rg").val(),        
        'pis' : $("#campo_pis").val(),
        'funcao' : $("#campo_funcao").val(),
        'setor' : $("#campo_setor").val(),
        'salario' : $("#campo_salario").val(),
        'vale_transporte' : $("#campo_vale_transporte").val(),
        'insalubridade'   : $("#campo_insalubridade").val(),
        'periculosidade'  : $("#campo_periculosidade").val(),
    };
    pageurl = 'php/cadastrar_funcionario.php';
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
         alert("Funcionário inserido com sucesso!");
               document.getElementById('campo_nome').value="";
               document.getElementById('campo_admissao').value="";
               document.getElementById('campo_telefone').value="";
               document.getElementById('campo_sexo').value="";
               document.getElementById('campo_cpf').value="";
               document.getElementById('campo_rg').value="";
               document.getElementById('campo_pis').value="";
               document.getElementById('campo_funcao').value="";
               document.getElementById('campo_setor').value="";
               document.getElementById('campo_salario').value="";
               document.getElementById('campo_vale_transporte').value="";
               document.getElementById('campo_insalubridade').value="";
               document.getElementById('campo_periculosidade').value="";
            }
            //se foi um erro
            else
            {
             alert("Não foi possível inserir o Funcionário!");
              document.getElementById('campo_nome').value="";
               document.getElementById('campo_admissao').value="";
               document.getElementById('campo_telefone').value="";
               document.getElementById('campo_sexo').value="";
               document.getElementById('campo_cpf').value="";
               document.getElementById('campo_rg').value="";
               document.getElementById('campo_pis').value="";
               document.getElementById('campo_funcao').value="";
               document.getElementById('campo_setor').value="";
               document.getElementById('campo_salario').value="";
               document.getElementById('campo_vale_transporte').value="";
               document.getElementById('campo_insalubridade').value="";
               document.getElementById('campo_periculosidade').value="";
            }
 
        }
    });
}
 

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

function voltar(){
	if(confirm('Você tem certeza que quer sair da página?'))
		pagina_principal();
}


function validar_emitente(){
 $.getJSON('php/buscar_emitente.php', function (dados){
       if (dados.length < 1){   
        alert('Não existe nenhum emitente cadastrado no sistema!');
        window.history.back();
       }else{
        validar_funcionario();
       }
    });
}


function validar_funcionario(){
  $.getJSON('php/buscar_funcionario.php', function (dados){
       if (dados.length < 1){   
        alert('Não existe nenhum funcionário cadastrado no sistema!');
        window.history.back();
       }else{
        $funcs = dados.length;
        carrega_competencia();
       }
       insere_total_funcionarios($funcs);
    });
  }


function carrega_competencia(){
	competencia = prompt('Digite a competência:');
	if (competencia==null){
		//alert("voltando!");
		window.history.back();
	}
	else{
    	if(competencia.length>0){
    	$("#campo_competencia").val(competencia);
      buscar_dados();
		}
	}

}

 function buscar_dados(){
       $.getJSON('php/buscar_recibo.php', {campo_competencia: $("#campo_competencia").val()}, function (dados){
       if (dados.length > 0){   
        $valor_salario_normal = 0
        $valor_insalubridade = 0
        $valor_periculosidade = 0
        $valor_add_noturno = 0
        $valor_horas_extra = 0
        $valor_hora_fds = 0
        $valor_salario_familia = 0
        $valor_dsr = 0

        $valor_inss = 0
        $valor_faltas = 0
        $valor_ir = 0
        $valor_adiantamentos = 0
        $valor_vale_transporte = 0
        for($i=0; $i < dados.length; $i++){
                $valor_emitente = (dados[$i].emitente);
                $valor_salario_normal = ($valor_salario_normal + parseFloat(dados[$i].salario_normal));
                $valor_insalubridade = ($valor_insalubridade + parseFloat(dados[$i].insalubridade));
                $valor_periculosidade = ($valor_periculosidade + parseFloat(dados[$i].periculosidade));
                $valor_add_noturno = ($valor_add_noturno + parseFloat(dados[$i].add_noturno));
                $valor_horas_extra = ($valor_horas_extra + parseFloat(dados[$i].horas_extras));
                $valor_hora_fds = ($valor_hora_fds + parseFloat(dados[$i].horas_fds));
                $valor_salario_familia = ($valor_salario_familia + parseFloat(dados[$i].salario_familia));
                $valor_dsr = ($valor_dsr + parseFloat(dados[$i].dsr));

                $valor_inss = ($valor_inss + parseFloat(dados[$i].inss));
                $valor_faltas = ($valor_faltas + parseFloat(dados[$i].faltas));
                $valor_ir = ($valor_ir + parseFloat(dados[$i].ir));
                $valor_adiantamentos = ($valor_adiantamentos + parseFloat(dados[$i].adiantamento));
                $valor_vale_transporte = ($valor_vale_transporte + parseFloat(dados[$i].vale_transporte));
            }
            inserir_dados($valor_emitente, $valor_salario_normal, $valor_insalubridade,  $valor_periculosidade, $valor_add_noturno, $valor_horas_extra, $valor_hora_fds,  $valor_salario_familia, $valor_dsr, $valor_inss, $valor_faltas, $valor_ir, $valor_adiantamentos, $valor_vale_transporte);
        } else{
          alert('Nenhuma folha encontrada nesta competência!');
           window.history.back();
        }
    });
 }


  

function inserir_dados(valor_emitente, valor_salario_normal, valor_insalubridade, valor_periculosidade, valor_add_noturno, valor_horas_extra, valor_hora_fds, valor_salario_familia, valor_dsr, valor_inss, valor_faltas, valor_ir, valor_adiantamentos, valor_vale_transporte){
   $("#campo_emitente").val(valor_emitente);
   $("#campo_salario_normal").val(valor_salario_normal.toFixed(2));
   $("#campo_insalubridade").val(valor_insalubridade.toFixed(2));
   $("#campo_periculosidade").val(valor_periculosidade.toFixed(2));
   $("#campo_add_noturno").val(valor_add_noturno.toFixed(2));
   $("#campo_horas_extra").val(valor_horas_extra.toFixed(2));
   $("#campo_horas_fds").val(valor_hora_fds.toFixed(2));
   $("#campo_salario_familia").val(valor_salario_familia.toFixed(2));
   $("#campo_dsr").val(valor_dsr.toFixed(2));
   $("#campo_total_proventos").val(calcula_total_proventoss());
   $("#campo_inss").val(valor_inss.toFixed(2));
   $("#campo_faltas").val(valor_faltas.toFixed(2));
   $("#campo_ir").val(valor_ir.toFixed(2));
   $("#campo_adiantamentos").val(valor_adiantamentos.toFixed(2));
   $("#campo_vale_transporte").val(valor_vale_transporte.toFixed(2));
   $("#campo_total_descontos").val(calcula_total_descontos());
   $("#total_pagar1").val('R$ '+ calcula_total_pagar());
}

function insere_total_funcionarios(funcs){
$("#total_funcionarios1").val(funcs);
}


function calcula_total_proventoss(){
var  valor_salario_normal  =   parseFloat($valor_salario_normal);
var  valor_insalubridade =  parseFloat($valor_insalubridade);
var  valor_periculosidade =  parseFloat($valor_periculosidade);
var  valor_add_noturno  = parseFloat($valor_add_noturno);
var  valor_horas_extra =  parseFloat($valor_horas_extra);
var  valor_hora_fds = parseFloat($valor_hora_fds);
var  valor_salario_familia= parseFloat($valor_salario_familia);
var  valor_dsr =  parseFloat($valor_dsr);
  total = (valor_salario_normal+valor_insalubridade+valor_periculosidade+valor_add_noturno+valor_horas_extra+valor_hora_fds+valor_salario_familia+valor_dsr)
  return total.toFixed(2);
}

function calcula_total_descontos(){
  var valor_inss = parseFloat($valor_inss);
  var valor_faltas = parseFloat($valor_faltas);
  var valor_ir = parseFloat($valor_ir);
  var valor_adiantamentos = parseFloat($valor_adiantamentos);
  var valor_vale_transporte = parseFloat($valor_vale_transporte);

  total = (valor_inss+valor_faltas+valor_ir+valor_adiantamentos+valor_vale_transporte);
  return total.toFixed(2);
}

function calcula_total_pagar(){
  var vencimentos = parseFloat($("#campo_total_proventos").val());
  var descontos = parseFloat($("#campo_total_descontos").val());
  var total = (vencimentos-descontos);
  return total.toFixed(2);
}
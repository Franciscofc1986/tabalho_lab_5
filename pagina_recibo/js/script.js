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
function senha(){
     window.location = '../pagina_editar_senha/index.html';
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
                $valor_cnpj = dados[$i].cnpj;
                $valor_emtitente = dados[$i].nome_fantasia;
            }
        } 
         inserir_coluna_referencia1($valor_cnpj, $valor_emtitente);
});
   $.getJSON('php/buscar_dados_folha.php', function (dados){
       if (dados.length > 0){   
        for($i=0; $i < dados.length; $i++){
            // coloco o nome e sobre nome
                $valor_referencia_salario=30;
                $valor_competencia=dados[$i].competencia;
                $valor_funcionario=dados[$i].funcionario;
                $valor_dias_uteis = dados[$i].dias_uteis;
                $valor_dias_fds = dados[$i].dias_fds;
                $valor_falta_normal=dados[$i].falta_normal;
                $valor_falta_fds=dados[$i].falta_fds;
                $valor_add=dados[$i].add_noturno;
                $valor_hora_extra=dados[$i].hora_normal;
                $valor_fds=dados[$i].hora_fds;
                $valor_salario_familia=dados[$i].dependentes;
                $valor_adiantamento=dados[$i].adiantamento;
            }
        }
        inserir_coluna_referencia2($valor_referencia_salario, $valor_competencia, $valor_funcionario, $valor_falta_normal, $valor_falta_fds, $valor_add, $valor_hora_extra, $valor_fds, $valor_salario_familia, $valor_adiantamento); 
    });


   $.getJSON('php/buscar_dados_funcionario.php', function (dados){
       if (dados.length > 0){   
        for($i=0; $i < dados.length; $i++){
            // coloco o nome e sobre nome
                 $valor_funcao=dados[$i].funcao;
                 $valor_salario=dados[$i].salario;
                 $valor_insalubridade=dados[$i].insalubridade;
                 $valor_periculosidade=dados[$i].periculosidade;
                 $valor_vale_transporte=dados[$i].vale_transporte;
            }
        }
       inserir_coluna_referencia3($valor_funcao, $valor_salario, $valor_insalubridade ,$valor_periculosidade, $valor_vale_transporte);

    });

}

function inserir_coluna_referencia1(valor_cnpj, valor_emtitente){
  $("#campo_cnpj").val(valor_cnpj);
  $("#campo_emitente").val(valor_emtitente);
}

function inserir_coluna_referencia2(valor_referencia_salario, valor_competencia, valor_funcionario, valor_falta_normal, valor_falta_fds, valor_add, valor_hora_extra, valor_fds, valor_salario_familia, valor_adiantamento){
$("#campo_referencia_salario").val('30');
  $("#campo_competencia").val(valor_competencia);
  $("#campo_funcionario").val(valor_funcionario);
  $("#campo_referencia_faltas").val(calculo_faltas());
  $("#campo_referencia_add").val(valor_add);
  $("#campo_referencia_hora_extra").val(valor_hora_extra);
  $("#campo_referencia_fds").val(valor_fds);
  $("#campo_referencia_salario_familia").val(valor_salario_familia);
  $("#campo_desconto_adiantamento").val(parseFloat(valor_adiantamento).toFixed(2));

}
  function inserir_coluna_referencia3(valor_funcao, valor_salario, valor_insalubridade, valor_periculosidade, valor_vale_transporte){
  $("#campo_calculo_faltas").val(calculo_falta_descontos());
  $("#campo_funcao").val(valor_funcao);
  $("#campo_vencimento_salario").val(parseFloat(valor_salario).toFixed(2));
  $("#campo_referencia_insalubridade").val(valor_insalubridade);
  $("#campo_referencia_periculosidade").val(valor_periculosidade);
  $("#campo_referencia_vale_transporte").val(valor_vale_transporte);
  $("#campo_desconto_vale_transporte").val(calcula_vale_transporte());
  $("#campo_vencimento_insalubridade").val(calcula_insalubridade());
  $("#campo_vencimento_periculosidade").val(calcula_periculosidade());
  $("#campo_vencimento_add_noturno").val(calcula_add());
  $("#campo_vencimento_h_extra").val(calcula_hora_normal());
  $("#campo_vencimento_h_fds").val(calcula_hora_fds());
  $("#campo_vencimento_dsr_rem").val(calcula_dsr_remunerado());
  $("#campo_referencia_inss").val(calcula_referencia_inss());
  $("#campo_calculo_inss").val(calcula_inss());
  $("#campo_calculo_ir").val(calcula_ir());
  $("#campo_vencimento_salario_familia").val(calcula_salario_familia());
  $("#total_inss1").val(calculo_inss());
  $("#total_calc_fgts1").val(fgts());
  $("#total_mes1").val(calcula_mes()); 
  $("#total_irrf1").val(calcula_irrf());
  $("#total_salario_base1").val(fgts());
  $("#total_vencimentos1").val(calcula_vencimentos());
  $("#total_descontos1").val(calcula_descontos());
  $("#total_liquido1").val(calcula_liquido());

}

    function calculo_faltas(){
       var faltanorm = parseInt($valor_falta_normal);
       var faltafds = parseInt($valor_falta_fds);
       var soma_faltas = faltanorm+faltafds;
       return soma_faltas;
    }

     function calculo_falta_descontos(){
       var faltanorm = parseInt($valor_falta_normal);
       var faltafds = parseInt($valor_falta_fds);
       var salario = parseFloat($valor_salario);
       var soma1 = (salario/30)*(faltanorm);
       var soma2 = (salario/30)*(faltafds);
       var total = soma1 + soma2;
       return total.toFixed(2);
    }

    function calcula_vale_transporte(){
      var salario = parseFloat($valor_salario);
      var v_transporte = parseFloat($valor_vale_transporte);
      var total = (salario*v_transporte)/100;
      return total.toFixed(2);
    }

    function calcula_insalubridade(){
      var sal_minimo = 724.00;
      var insalubri = parseFloat($valor_insalubridade);
      var total = (sal_minimo*insalubri)/100;
      return total.toFixed(2);
    }

    function calcula_periculosidade(){
      var salario_bruto = parseFloat($valor_salario);
      var periculo = parseFloat($valor_periculosidade);
      var insalubrid = parseFloat($("#campo_vencimento_insalubridade").val());
      var faltas = parseFloat($("#campo_calculo_faltas").val());
      var total1 = (salario_bruto+insalubrid)-faltas;
      var total2 = (total1 * periculo)/100;
      return total2.toFixed(2);
    }

    function calcula_add(){
      var sala = parseFloat($valor_salario);
      var insa = parseFloat($("#campo_vencimento_insalubridade").val());
      var perica = parseFloat($("#campo_vencimento_periculosidade").val());
      var add = parseFloat($valor_add);
      var soma1 = (sala+insa+perica)/220;
      var result = (soma1*add);
      result = ((result*20)/100)+result;
      return result.toFixed(2);
    }

    function calcula_hora_normal(){
      var salario_bruto = parseFloat($valor_salario);
      var insa = parseFloat($("#campo_vencimento_insalubridade").val());
      var perica = parseFloat($("#campo_vencimento_periculosidade").val());
      var hor_ext = parseFloat($valor_hora_extra);
      var soma3 = (salario_bruto+insa+perica)/220;
      var result = (soma3*hor_ext);
      result = ((result*50)/100)+result;
      return result.toFixed(2);
    }

     function calcula_hora_fds(){
      var salario_bruto = parseFloat($valor_salario);
      var insa = parseFloat($("#campo_vencimento_insalubridade").val());
      var perica = parseFloat($("#campo_vencimento_periculosidade").val());
      var hor_fds = parseFloat($valor_fds);
      var soma4 = (salario_bruto+insa+perica)/220;
      result = ((soma4*2)*soma4);
      return result.toFixed(2);
    }

    function calcula_dsr_remunerado(){
      var insa = parseFloat($("#campo_vencimento_insalubridade").val());
      var perica = parseFloat($("#campo_vencimento_periculosidade").val());
      var add_n = parseFloat($("#campo_vencimento_add_noturno").val());
      var hor_norm = parseFloat($("#campo_vencimento_h_extra").val());
      var ho_fds = parseFloat($("#campo_vencimento_h_fds").val());
      var d_uteis = parseFloat($valor_dias_uteis);
      var d_fds = parseFloat($valor_dias_fds);
      var soma5 = (insa+perica+add_n+hor_norm+ho_fds);
      var result = (soma5/d_uteis)*d_fds;
      return result.toFixed(2);
    }

    function calcula_referencia_inss(){
      var salario_bruto = parseFloat($valor_salario);
      var hor_norm = parseFloat($("#campo_vencimento_h_extra").val());
      var ho_fds = parseFloat($("#campo_vencimento_h_fds").val());
      var add_n = parseFloat($("#campo_vencimento_add_noturno").val());
      var insa = parseFloat($("#campo_vencimento_insalubridade").val());
      var perica = parseFloat($("#campo_vencimento_periculosidade").val());
      var dsr = parseFloat($("#campo_vencimento_dsr_rem").val());
      var faltas_no = parseFloat($("#campo_calculo_faltas").val());
      var result = (salario_bruto+hor_norm+ho_fds+add_n+insa+perica+dsr)-faltas_no;
      return result.toFixed(2)
    }

    function calcula_inss(){
     var inss = parseFloat($("#campo_referencia_inss").val());
     if(inss<1317.07){
      inss = (inss*8)/100;
     }

     if(inss>1317.08 && inss<2195.12){
      inss = (inss*9)/100;
     }

     if(inss>2195.13 && inss<4390.24){
      inss = (inss*11)/100;
     }

     if(inss>4390.25){
      inss = 482.93;
     }

     return inss.toFixed(2);
    }

    function calcula_ir(){
     var ir_referencia = ($("#campo_referencia_inss").val());
     var ir_vencimento = ($("#campo_calculo_inss").val());
     var sub = (ir_referencia - ir_vencimento);

     var deducao = parseFloat($valor_salario_familia);
     var result1 = (deducao*179.71);

     sub = (sub-result1);

     if(sub<1787.77){
      sub = 0;
     }

     if(sub>1787.78 && sub<2679.29){
      sub = ((sub*7.5)/100)-134.08;
     }

     if(sub>2679.30 && sub<3572.43){
      sub = ((sub*15)/100)-335.03;
     }

     if(sub>3572.44 && sub<4463.81){
      sub = ((sub*22.5)/100)-602.96;
     }

     if(sub>34462.82){
      sub = ((sub*27.5)/100)-826.15;
     }

     return sub.toFixed(2);
    }

    function calcula_salario_familia(){
      var salario_bruto = parseFloat($valor_salario);
      var hor_norm = parseFloat($("#campo_vencimento_h_extra").val());
      var ho_fds = parseFloat($("#campo_vencimento_h_fds").val());
      var add_n = parseFloat($("#campo_vencimento_add_noturno").val());
      var insa = parseFloat($("#campo_vencimento_insalubridade").val());
      var perica = parseFloat($("#campo_vencimento_periculosidade").val());
      var dsr = parseFloat($("#campo_vencimento_dsr_rem").val());
      var familia = parseFloat($valor_salario_familia);


      var result = (salario_bruto+hor_norm+ho_fds+add_n+insa+perica+dsr);

      if(result<682.50){
        result= familia*35;
      }

      if(result>682.51 && result<1025.81){
        result= familia*34.66;
      }

      if(result>1025.82){
        result = 0;
      }

      return result.toFixed(2);
    }

    function calculo_inss(){
      var salario_bruto = parseFloat($valor_salario);
      var hor_norm = parseFloat($("#campo_vencimento_h_extra").val());
      var ho_fds = parseFloat($("#campo_vencimento_h_fds").val());
      var add_n = parseFloat($("#campo_vencimento_add_noturno").val());
      var insa = parseFloat($("#campo_vencimento_insalubridade").val());
      var perica = parseFloat($("#campo_vencimento_periculosidade").val());
      var dsr = parseFloat($("#campo_vencimento_dsr_rem").val());
      var faltas_no = parseFloat($("#campo_calculo_faltas").val());
      var result = (salario_bruto+hor_norm+ho_fds+add_n+insa+perica+dsr)-faltas_no;
      return result.toFixed(2)
    }

    function fgts(){
      var salario_bruto = parseFloat($valor_salario);
      var hor_norm = parseFloat($("#campo_vencimento_h_extra").val());
      var ho_fds = parseFloat($("#campo_vencimento_h_fds").val());
      var add_n = parseFloat($("#campo_vencimento_add_noturno").val());
      var insa = parseFloat($("#campo_vencimento_insalubridade").val());
      var perica = parseFloat($("#campo_vencimento_periculosidade").val());
      var dsr = parseFloat($("#campo_vencimento_dsr_rem").val());
      var faltas_no = parseFloat($("#campo_calculo_faltas").val());
      var result = (salario_bruto+hor_norm+ho_fds+add_n+insa+perica+dsr)-faltas_no;
      return result.toFixed(2)
    }

    function calcula_mes(){
      var fgts = parseFloat($("#total_calc_fgts1").val());
      fgts = (fgts*8)/100;
      return fgts.toFixed(2);
    }

    function calcula_irrf(){
      var ir_referencia = ($("#campo_referencia_inss").val());
     var ir_vencimento = ($("#campo_calculo_inss").val());
     var sub = (ir_referencia - ir_vencimento);

     var deducao = parseFloat($valor_salario_familia);
     var result1 = (deducao*179.71);

     sub = (sub-result1);
     return sub.toFixed(2);
    }

    function calcula_vencimentos(){
      var salario = parseFloat($("#campo_vencimento_salario").val());
      var insal = parseFloat($("#campo_vencimento_insalubridade").val()); 
      var peric = parseFloat($("#campo_vencimento_periculosidade").val());
      var add_not = parseFloat($("#campo_vencimento_add_noturno").val());
      var h_ex = parseFloat($("#campo_vencimento_h_extra").val());
      var h_fd = parseFloat($("#campo_vencimento_h_fds").val());
      var salario_familia = parseFloat($("#campo_vencimento_salario_familia").val());
      var dsr = parseFloat($("#campo_vencimento_dsr_rem").val());
      var soma = (salario+insal+peric+add_not+h_ex+h_fd+salario_familia+dsr);
      return soma.toFixed(2);
    }

    function calcula_descontos(){
      var ir = parseFloat($("#campo_calculo_ir").val());
      var faltas = parseFloat($("#campo_calculo_faltas").val()); 
      var adiant = parseFloat($("#campo_desconto_adiantamento").val());
      var v_t = parseFloat($("#campo_desconto_vale_transporte").val());
      var inss = parseFloat($("#campo_calculo_inss").val());
      var soma = (ir+faltas+adiant+v_t+inss);
      return soma.toFixed(2);
    }

    function calcula_liquido(){
      var venc = parseFloat($("#total_vencimentos1").val());
      var desc = parseFloat($("#total_descontos1").val());
      var sub = (venc-desc);
      return sub.toFixed(2);
    }

    function inserir_registro(){
    var dadosajax = {
      
        'campo_emitente' : $("#campo_emitente").val(),
        'competencia' : $("#campo_competencia").val(),
        'salario_normal' : $("#campo_vencimento_salario").val(),
        'insalubrid' : $("#campo_vencimento_insalubridade").val(),
        'periculosid' : $("#campo_vencimento_periculosidade").val(),  
        'add_not' : $("#campo_vencimento_add_noturno").val(), 
        'hora_extra' : $("#campo_vencimento_h_extra").val(),
        'hora_fimds' : $("#campo_vencimento_h_fds").val(),
        'salar_familia' : $("#campo_vencimento_salario_familia").val(),
        'dsr_remunerado' : $("#campo_vencimento_dsr_rem").val(),
        'inss' : $("#campo_calculo_inss").val(),
        'faltass' : $("#campo_calculo_faltas").val(),
        'imposto' : $("#campo_calculo_ir").val(),
        'adiantament' : $("#campo_desconto_adiantamento").val(),
        'vale_trans' : $("#campo_desconto_vale_transporte").val(),


    };
    pageurl = 'php/cadastrar_recibo.php';
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
            alert("Recibo inserido com sucesso!");
            folha();
            } else{
              alert('Falha ao salvar o recibo!');
          }
      }
    });
  }
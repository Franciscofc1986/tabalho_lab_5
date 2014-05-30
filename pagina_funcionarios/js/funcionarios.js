var form=document.formulario;
function validar(){
	if (form.n_empresa.value.length<4){
		alert("Preencha o nome da empresa corretamente.");
		form.n_empresa.focus();
		return false;
		}
	if (validaDat(form.d_admissao,form.d_admissao.value)) {
		if (erro) {
		alert(" " + form.d_admissao.value + " não é uma data válida! dd/mm/aaaa");
		form.d_admissao.focus();
		//campo.value = "";
		return false;
	}
		}
	if (form.nome_f.value.length<4) {
		alert("Preencha o nome do funcionario corretamente.");
		form.nome_f.focus();
		return false;
	}
	if (form.fone.value==""||!IsNum(form.fone.value)) {
		alert("Preencha o telefone corretamente.");
		form.fone.focus();
		return false;
	}
	if (form.c_p_f.value==""||!IsNum(form.c_p_f.value)) {
		alert("Preencha a Inscrição Estadual corretamente.");
		form.c_p_f.focus();
		return false;
	}
	if (form.r_g.value==""||!IsNum(form.r_g.value)) {
		alert("Preencha a Inscrição Estadual corretamente.");
		form.r_g.focus();
		return false;
	}
	if (form.p_i_s.value==""||!IsNum(form.p_i_s.value)) {
		alert("Preencha a Inscrição Estadual corretamente.");
		form.p_i_s.focus();
		return false;
	}
	if (form.func.value==""||form.func.value.length<5) {
		alert("Preencha o numero corretamente.");
		form.numero.focus();
		return false;
	}
	if (form.set.value==""||form.set.value.length<5) {
		alert("Preencha o bairro corretamente.");
		form.set.focus();
		return false;
	}

	alert("Funcionario adicionado com sucesso! ")
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
function validaDat(campo,valor) {
	var date=valor;
	var ardt=new Array;
	var ExpReg=new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
	ardt=date.split("/");
	erro=false;
	if ( date.search(ExpReg)==-1){
		erro = true;
	}
	else if (((ardt[1]==4)||(ardt[1]==6)||(ardt[1]==9)||(ardt[1]==11))&&(ardt[0]>30))
	erro = true;
	else if ( ardt[1]==2) {
		if ((ardt[0]>28)&&((ardt[2]%4)!=0))
		erro = true;
		if ((ardt[0]>29)&&((ardt[2]%4)==0))
		erro = true;
	}
return erro;
}
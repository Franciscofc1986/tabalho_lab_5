var form=document.formulario;
function validar(){

	if (form.comp.value.length<4){
		alert("Preencha a competência corretamente.");
		form.comp.focus();
		return false;
		}
	if (form.func.value.length<4){
		alert("Preencha o nome do funcionário corretamente.");
		form.func.focus();
		return false;
		}
	if (form.d_u.value==""||!IsNum(form.d_u.value)) {
		alert("Preencha os dias úteis corretamente.");
		form.d_u.focus();
		return false;
	}
	if (form.fds.value==""||!IsNum(form.fds.value)) {
		alert("Preencha os Dias F.D.S. do mês corretamente.");
		form.fds_est.focus();
		return false;
	}
	if (form.h_extra_n.value==""||!IsNum(form.h_extra_n.value)) {
		alert("Preencha a hora extra normal corretamente.");
		form.h_extra_n.focus();
		return false;
	}
	if (form.h_extra_fds.value==""||!IsNum(form.h_extra_fds.value)) {
		alert("Preencha a hora extra de final de semana corretamente.");
		form.h_extra_fds.focus();
		return false;
	}
	if (form.f_normal.value==""||!IsNum(form.f_normal.value)) {
		alert("Preencha a falta normal corretamente.");
		form.f_normal.focus();
		return false;
	}
	if (form.f_fds.value==""||!IsNum(form.f_fds.value)) {
		alert("Preencha a falta de final de semana corretamente.");
		form.f_fds.focus();
		return false;
	}
	if (form.add_not.value==""||!IsNum(form.add_not.value)) {
		alert("Preencha o addicional noturno corretamente.");
		form.add_not.focus();
		return false;
	}
	if (form.dep.value==""||!IsNum(form.dep.value)) {
		alert("Preencha o numero de dependentes corretamente.");
		form.dep.focus();
		return false;
	}
	if (form.adianta.value==""||!IsNum(form.adianta.value)) {
		alert("Preencha o adiantamento corretamente.");
		form.adianta.focus();
		return false;
	}
	alert("Folha adicionada com sucesso! ")
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
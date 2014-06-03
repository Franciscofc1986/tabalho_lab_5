function ver_tam(fn,nc){
	if (document.getElementById(fn).value.length<4){
		alert("Preencha o campo "+nc+" corretamente.");
		document.getElementById(fn).focus();
		fn='';
		nc='';
		return false;
		}
}
function ver_num(fn,nc){
	if (document.getElementById(fn).value==""||!IsNum(document.getElementById(fn).value)) {
		alert("Preencha o campo "+nc+" corretamente.");
		document.getElementById(fn).focus();
		fn='';
		nc='';
		return false;
	}
}
function validaDat(campo) {
	var date=campo.value;
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
	if (erro) {
		alert("" + date + " não é uma data válida!!!");
		campo.focus();
		campo.value = "";
		return false;
	}
	return true;
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
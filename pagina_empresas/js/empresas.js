function validar(){
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
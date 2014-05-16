var form=document.formulario;
var nome='';
var senha='';
function validar(){
	nome=form.nome.value;
	senha=form.senha_user.value;
	if(nome=="admin"&&senha=="admin"){
		alert("bem vindo " +nome+"!")
		window.open('pagina_inicial/pagina_inicial.html','_blank');
		window.close('this');

		//window.open('frame/frame_principal.html','_parent');
	}
	else{
		if(nome!="admin")
		{
			alert("usuário "+nome+" não autorizado!")
		}
		else
		{
			alert("senha não confere")
		}
	}
}
function validaLogin(){
 
  if($("#login").val() == ""){
    alert("Informe o login!"); 
    login.focus(); 
    return; 
  }
  else if($("#senha").val() == ""){
    alert("Informe a senha!");
    senha.focus();
    return;
  }
 
  else{
    buscar();
  } 
}

 function buscar(){
      $.getJSON('php/buscar_usuario.php', function (dados){
       if (dados.length>0){ 
       for($i=0; $i< dados.length; $i++){
        if($('#login').val() == dados[$i].login && $('#senha').val() == dados[$i].senha){
            alert('Bem vindo!');
            window.location='pagina_inicial/pagina_inicial.html';
        }else{
          alert('Usuário e/ou senha incorretos!')
        }
       }
      }else{
        alert('Não existe usuário cadastrado no sistema!');
      }
  });
}

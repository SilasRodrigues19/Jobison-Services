function validarSenha(name1, name2)
{
    var senha1 = document.getElementById(senha).value;
    var senha2 = document.getElementById(confirmacao-senha).value;
		
    if (senha != "" && confirmacao-senha != "" && senha === confirmacao-senha)
    {
    	alert('senha iguais');
    }
    else
    {
      	alert('senhas diferentes');
    }
}
<input type="password"
       name="senha1" 
       id="senha1" 
       required
       size="10" 
       maxlength="10" 
       onblur="validarSenha('senha','senha1')" />
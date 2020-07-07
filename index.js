var getData = function(){
    var password = document.getElementById("password").value;
    var account = document.getElementById("account").value;
   
    
    if(password.length>=8){
        console.log(account+" "+password);
    }
}
var Confirmar = function(){

    
    const mensaje = document.getElementById("password");
    const mensaje2 = document.getElementById("account");
    const boton = document.getElementById("login");
   
    
    if (mensaje.value.trim() !== "") {
      if (mensaje2.value.trim() !== "") {
        boton.removeAttribute('disabled')
        document.getElementById("login").style.backgroundColor= "#0095f6";
      } 
      
    } else {
      boton.setAttribute('disabled', "true");
    }
  }

var no_coin = function(){
    
    var nodo_login = document.getElementById("login");
    var nodo_ingresar = document.getElementById("ingresar");
    var n_span = document.createElement("span");
    n_span.textContent = "usuario incorrecto";
    nodo_login.insertBefore(n_span, nodo_ingresar);
    nodo_ingresar.classList.remove("mt-4")
}


var main = function(){

}

window.onload = main;
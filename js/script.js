document.getElementById("btn_iniciar_sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registro").addEventListener("click", registro);
window.addEventListener("resize",tamannoPagina)


var login = document.querySelector(".login");
var registrovar = document.querySelector(".registro");
var formulario_contenedor = document.querySelector(".formularios");
var formulario_login = document.querySelector(".formulario_login");
var formulario_registro = document.querySelector(".formulario_registro");


function tamannoPagina(){

    if(window.innerWidth>850){
        login.style.display = "block";
        registrovar.style.display = "block";
    }
    else 
    {
        registrovar.style.display = "block";
        registrovar.style.opacity = "1";
        login.style.display = "none";
        formulario_login.style.display  = "block";
        formulario_registro.style.display ="none";
        formulario_contenedor.style.left = "0px";
    }
}

tamannoPagina();

function iniciarSesion(){

    if(window.innerWidth>850)
    {
        formulario_registro.style.display ="none";
        formulario_contenedor.style.left = "10px";
        formulario_login.style.display = "block";
        registrovar.style.opacity = "1";
        login.style.opacity = "0";
    }
    else
    {
        formulario_registro.style.display ="none";
        formulario_contenedor.style.left = "0px";
        formulario_login.style.display = "block";
        registrovar.style.display = "block";
        login.style.display ="none";
    }
}

function registro(){

    if(window.innerWidth>850)
    {
        formulario_registro.style.display ="block";
        formulario_contenedor.style.left = "410px";
        formulario_login.style.display = "none";
        registrovar.style.opacity = "0";
        login.style.opacity = "1";
    }
    else
    {
        formulario_registro.style.display ="block";
        formulario_contenedor.style.left = "0px";
        formulario_login.style.display = "none";
        registrovar.style.display = "none";
        login.style.display ="block";
        login.style.opacity = "1";
    }
}

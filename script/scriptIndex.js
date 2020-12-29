$(document).ready(function() {

    setTimeout(function() {
        //
        $(".bienvenido").fadeOut(1500);
    }, 5000);
    setTimeout(function() {
        $(".form-group").fadeIn(1500);
    }, 5000);


});

/* --------------------------Si pulsamos CTRL + F10 -----------------------------------*/

function onKeyUnPressed(event) {
    var codigo = event.which || event.keyCode;
    //la tecla Ctrl tiene el codigo 17 y la tecla F10 tiene el código 121
    if (codigo === 17 || codigo === 121) {
        //cambiamos el display a block, para que se muestre la div, y a none para que desaparezca
        document.getElementById("validE").style.display = "block";
        document.getElementById("invalidE").style.display = "none";
    }
}
/* -------------------------VALIDAMOS EMAIL--------------------------------------------*/
function validar() {
    var email = document.getElementById("email").value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(email)) {
        setCookie('usuario', email, 7)
        window.location.href = 'pantallaDos.html';

    } else {
        alert("La dirección de email es incorrecta.");

    }
}
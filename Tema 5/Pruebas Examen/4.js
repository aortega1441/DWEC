window.onload = init;

var X = outerWidth;
var Y = outerHeight;

var mitadX = X / 2;
var mitadY = Y / 2;

function init() {

    document.addEventListener("click", mostrar);

}

function mostrar(evento) {

    var cuerpo = document.getElementById("body");

    if (evento.clientX < mitadX && evento.clientY < mitadY) {
        cuerpo.innerHTML = "IZQUIERDA ARRIBA"
    } else if (evento.clientX < mitadX && evento.clientY > mitadY) {
        cuerpo.innerHTML = "IZQUIERDA ABAJO"
    } else if (evento.clientX > mitadX && evento.clientY < mitadY) {
        cuerpo.innerHTML = "DERECHA ARRIBA"
    } else {
        cuerpo.innerHTML = "DERECHA ABAJO"
    }

}
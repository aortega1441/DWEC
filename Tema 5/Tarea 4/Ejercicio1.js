// window.onload = init;

// var ancho = outerWidth;
// console.log(ancho);
// var alto = outerHeight;
// var x = 0;
// var y = 0;

// function init() {

//     document.addEventListener("keydown", mover);

// }

// function mover(evento) {

//     var caja = document.getElementById("caja");

//     if (evento.key == "ArrowRight" || evento.key == "d") {
//         if (x < ancho - 120) {
//             x = x + 10;
//             caja.style.left = x + "px";
//         }
//     } else if (evento.key == "ArrowLeft" || evento.key == "a") {
//         if (x > 0) {
//             x = x - 10;
//             caja.style.left = x + "px";
//         }
//     } else if (evento.key == "ArrowUp" || evento.key == "w") {
//         if (y > 0) {
//             y = y - 10;
//             caja.style.top = y + "px";
//         }
//     } else if (evento.key == "ArrowDown" || evento.key == "s") {
//         if (y < alto - 220) {
//             y = y + 10;
//             caja.style.top = y + "px";
//         }
//     }

// }

window.onload = init;

var ancho = outerWidth;
var alto = outerHeight;
var x = 0;
var y = 0;

function init() {

    document.addEventListener("keydown", mover);

}

function mover(evento) {

    var caja = document.getElementById("caja");

    if (evento.key == "ArrowRight" || evento.key == "d") {

        if (x < ancho - 120) {

            x = x + 10;
            caja.style.left = x + "px";

        }

    } else if (evento.key == "ArrowLeft" || evento.key == "a") {

        if (x > 0) {

            x = x - 10;
            caja.style.left = x + "px";

        }

    } else if (evento.key == "ArrowUp" || evento.key == "w") {

        if (y > 0) {

            y = y - 10;
            caja.style.top = y + "px";

        }

    } else if (evento.key == "ArrowDown" || evento.key == "s") {

        if (y < alto-210) {

            y = y + 10;
            caja.style.top = y + "px";

        }

    }

}
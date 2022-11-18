window.onload = init;

var contador = 1;

function init() {

    document.getElementById("siguiente").addEventListener("click", siguiente);
    document.getElementById("anterior").addEventListener("click", anterior);

}

function siguiente() {

    var imagen = document.getElementById("imagen");
    if (contador < 7) {
        contador++;
        imagen.src = "imagenes/" + contador + ".jpg";
    }

}

function anterior() {

    var imagen = document.getElementById("imagen");
    if (contador > 1) {
        contador--;
        imagen.src = "imagenes/" + contador + ".jpg";
    }

}
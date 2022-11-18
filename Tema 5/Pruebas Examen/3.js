window.onload = init;

function init() {

    document.getElementById("enlace_1").addEventListener("click", funcion1);
    document.getElementById("enlace_2").addEventListener("click", funcion2);
    document.getElementById("enlace_3").addEventListener("click", funcion3);

}

function funcion1() {

    var enlace1 = document.getElementById("enlace_1");
    var parrafo1 = document.getElementById("contenidos_1");

    parrafo1.style.display = "none";

    if (enlace1.innerHTML == "Ocultar contenidos") {
        enlace1.innerHTML = "Mostrar contenidos"
    } else {
        enlace1.innerHTML = "Ocultar contenidos"
        parrafo1.style.display = "block";
    }

}

function funcion2() {

    var enlace2 = document.getElementById("enlace_2");
    var parrafo2 = document.getElementById("contenidos_2");

    parrafo2.style.display = "none";

    if (enlace2.innerHTML == "Ocultar contenidos") {
        enlace2.innerHTML = "Mostrar contenidos"
    } else {
        enlace2.innerHTML = "Ocultar contenidos"
        parrafo2.style.display = "block";
    }

}

function funcion3() {

    var enlace3 = document.getElementById("enlace_3");
    var parrafo3 = document.getElementById("contenidos_3");

    parrafo3.style.display = "none";

    if (enlace3.innerHTML == "Ocultar contenidos") {
        enlace3.innerHTML = "Mostrar contenidos"
    } else {
        enlace3.innerHTML = "Ocultar contenidos"
        parrafo3.style.display = "block";
    }

}
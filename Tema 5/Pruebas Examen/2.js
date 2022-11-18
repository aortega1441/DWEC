window.onload = init;

function init() {

    document.getElementById("1").addEventListener("mouseover", mostrar);
    document.getElementById("2").addEventListener("mouseover", mostrar);
    document.getElementById("3").addEventListener("mouseover", mostrar);
    document.getElementById("4").addEventListener("mouseover", mostrar);
    document.getElementById("5").addEventListener("mouseover", mostrar);
    document.getElementById("6").addEventListener("mouseover", mostrar);
    document.getElementById("7").addEventListener("mouseover", mostrar);

    document.getElementById("1").addEventListener("mouseout", ocultar);
    document.getElementById("2").addEventListener("mouseout", ocultar);
    document.getElementById("3").addEventListener("mouseout", ocultar);
    document.getElementById("4").addEventListener("mouseout", ocultar);
    document.getElementById("5").addEventListener("mouseout", ocultar);
    document.getElementById("6").addEventListener("mouseout", ocultar);
    document.getElementById("7").addEventListener("mouseout", ocultar);

}

function mostrar() {

    document.getElementById(this.id).style.width = "400px";

}

function ocultar() {

    document.getElementById(this.id).style.width = "50px";

}
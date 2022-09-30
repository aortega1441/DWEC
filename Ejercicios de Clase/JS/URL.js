function inicializar() {
    var nuevaVentana;
    nuevaVentana = crearNueva();
    document.getElementById("crear-ventana").onclick = crear;
}

function crear() {
    var url = document.getElementById("url").value;
    if (url != "") {
        nuevaVentana.location.href = url;
    }

}

function crearNueva() {
    nuevaVentana = window.open("", "", "height=400, width=700");
}
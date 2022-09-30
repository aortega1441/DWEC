function inicializar() {
    document.getElementById("crear-ventana").onclick = crearNueva;
    document.getElementById("cerrar-ventana").onclick = cerrarNueva;
}

var nuevaVentana;

var contador = 0;

function crear() {
    if (contador < 5) {
        crearNueva();
    } else if (contador == 5) {
        alert("Ha llegado al máximo de ventanas");
    }
}

function crearNueva() {
    contador++;
    nuevaVentana = window.open("", "", "height=200, width=400");
    nuevaVentana.document.write("<html><h1>Nueva ventana (" + contador + ")</h1>");
    nuevaVentana.document.write("<input type=\"button\" id=\"cerrar-ventana\" value=\"Cerrar Nueva Ventana\" onclick=\"window.close()\"><br><br>");
    nuevaVentana.document.write("</html>");
}


function cerrarNueva() {
    if (nuevaVentana) {
        nuevaVentana = null;
    }
}
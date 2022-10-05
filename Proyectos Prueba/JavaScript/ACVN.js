function inicializar() {
    document.getElementById("crear-ventana").onclick = crearNueva;
    document.getElementById("cerrar-ventana").onclick = cerrarNueva;
}

var nuevaVentana;

function crearNueva() {
    nuevaVentana = window.open("prueba", "toolbar=yes location=no", "height=300, width=600");
}

function cerrarNueva() {
    if (nuevaVentana) {
        document.write("<html><h1>Cerrar esta ventana</h1>");
        document.write("<input type=\"button\" id=\"cerrar-ventana\" value=\"Cerrar Nueva Ventana\" onclick=\"window.close()\">");
        document.write("</html>");
        nuevaVentana = null;
    }
}
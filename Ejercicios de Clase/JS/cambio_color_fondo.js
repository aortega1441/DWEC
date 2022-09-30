function cambiaFondo(color) {
    document.body.style.background = color;
}

var llamada = window.setInterval(opciones, 1000);

var x = 0;
function opciones() {
    x++;
    switch (x) {
        case 1:
            cambiaFondo("#fdfd96");
            break;
        case 2:
            cambiaFondo("#77dd77");
            break;
        case 3:
            cambiaFondo("#ff6961");
            break;
        case 4:
            cambiaFondo("#fdcae1");
            break;
        case 5:
            cambiaFondo("#84b6f4");
            document.write("<h2>El proceso ha finalizado</h2>");
            break;
    }
}
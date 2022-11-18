
window.onload = init;

var nombreCorrecto = false;
var apellidosCorrectos = false;
var edadCorrecta = false;
var matriculaCorrecta = false;
var provinciaCorrecta = false;

function init() {

    document.getElementById("nombre").addEventListener("blur", mayus);
    document.getElementById("apellidos").addEventListener("blur", mayus);
    document.getElementById("nombre").addEventListener("blur", errorNombre);
    document.getElementById("apellidos").addEventListener("blur", errorApellido);
    document.getElementById("edad").addEventListener("blur", errorEdad);
    document.getElementById("matricula").addEventListener("blur", errorMatricula);
    document.getElementById("provincia").addEventListener("blur", errorMProvincia);
    document.getElementById("enviar").addEventListener("click", validar);

}

function mayus() {

    var nombre = document.getElementById("nombre");
    nombre.value = nombre.value.toUpperCase();
    var apellidos = document.getElementById("apellidos");
    apellidos.value = apellidos.value.toUpperCase();

}

function errorNombre() {

    var nombre = document.getElementById("nombre");
    var patron = /^[a-zA-Z áéíóúÁÉÍÓÚüÜªº]{3,20}$/;

    if (nombre.value.length == 0) {
        document.getElementById("errores").innerHTML = "Error: el nombre no puede estar vacio";
        document.getElementById("nombre").focus();
    } else if (!patron.test(nombre.value)) {
        document.getElementById("errores").innerHTML = "Error: longitud del nombre incorrecta";
        document.getElementById("nombre").focus();
    } else {
        document.getElementById("errores").innerHTML = "";
        nombreCorrecto = true;
    }

}

function errorApellido() {

    var apellidos = document.getElementById("apellidos");
    var patron = /^[a-zA-Z áéíóúÁÉÍÓÚüÜªº]{3,30}$/;

    if (apellidos.value.length == 0) {
        document.getElementById("errores").innerHTML = "Error: el apellidos no puede estar vacio";
        document.getElementById("apellidos").focus();
    } else if (!patron.test(apellidos.value)) {
        document.getElementById("errores").innerHTML = "Error: longitud del apellidos incorrecta";
        document.getElementById("apellidos").focus();
    } else {
        document.getElementById("errores").innerHTML = "";
        apellidosCorrectos = true;
    }

}

function errorEdad() {

    var edad = document.getElementById("edad");
    var patron = /^(1[8-9]|2[0-9]||3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-5])$/;

    var solucion = patron.test(edad.value);

    if (edad.value.length == 0) {
        document.getElementById("errores").innerHTML = "Error: La edad no puede estar vacía";
        document.getElementById("edad").focus();
    } else if (!solucion) {
        document.getElementById("errores").innerHTML = "Error: Edad incorrecta";
        document.getElementById("edad").focus();
    } else {
        document.getElementById("errores").innerHTML = "";
        edadCorrecta = true;
    }

}

function errorMatricula() {

    var matricula = document.getElementById("matricula");
    var patron = /^\d{4}([A-Z]{3})$/

    if (matricula.value.length == 0) {
        document.getElementById("errores").innerHTML = "Error: La matrícula no puede estar vacía";
        document.getElementById("matricula").focus();
    } else if (!patron.test(matricula.value)) {
        document.getElementById("errores").innerHTML = "Error: Matrícula incorrecta";
        document.getElementById("matricula").focus();
    } else {
        document.getElementById("errores").innerHTML = "";
        matricula.value = matricula.value.toUpperCase();
        matriculaCorrecta = true;
    }

}

function errorMProvincia() {

    var provincia = document.getElementById("provincia");

    if (provincia.value == 0) {
        document.getElementById("errores").innerHTML = "Error: Por favor elija una provincia";
        document.getElementById("provincia").focus();
    } else {
        document.getElementById("errores").innerHTML = "";
        provinciaCorrecta = true;
    }

}

function validar(evento) {

    var confirmar = confirm("¿Está seguro de que quiere enviar estos datos?");

    if (confirmar) {

        if (nombreCorrecto && apellidosCorrectos && edadCorrecta && matriculaCorrecta && provinciaCorrecta) {
            document.getElementById("formulario").onsubmit;
        } else {
            alert("Hay campos incorrectos");
            evento.preventDefault();
        }
    } else {
        evento.preventDefault();
    }

}
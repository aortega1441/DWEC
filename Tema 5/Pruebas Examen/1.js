window.onload = init;

var nombreCorrecto = false;
var apellidoCorrecto = false;
var nifCorrecto = false;
var telefonoCorrecto = false;
var emailCorrecto = false;
var matriculaCorrecta = false;
var fechaCorrecta = false;

function init() {


    document.getElementById("nombre").addEventListener("blur", mayus);
    document.getElementById("apellidos").addEventListener("blur", mayus);
    document.getElementById("nombre").addEventListener("blur", compruebaNombre);
    document.getElementById("apellidos").addEventListener("blur", compruebaApellidos);
    document.getElementById("nif").addEventListener("blur", compruebaNif);
    document.getElementById("telefono").addEventListener("blur", compruebaTelefono);
    document.getElementById("email").addEventListener("blur", compruebaEmail);
    document.getElementById("matricula").addEventListener("blur", compruebaMatricula);
    document.getElementById("fecha").addEventListener("blur", compruebaFecha);
    document.getElementById("enviar").addEventListener("click", validar);

}

function mayus() {

    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    nombre.value = nombre.value.toUpperCase();
    apellidos.value = apellidos.value.toUpperCase();

}

function compruebaNombre() {

    var nombre = document.getElementById("nombre");
    var patron1 = /^[a-zA-Z áéíóúÁÉÍÓÚÜüºª]{3,15}$/

    if (nombre.value.length == 0) {

        document.getElementById("errores").innerHTML = "El nombre está vacío"
        nombre.focus();

    } else if (nombre.value.length < 3 || nombre.value.length > 15) {

        document.getElementById("errores").innerHTML = "Longitud de nombre incorrecta"
        nombre.focus();

    } else if (!patron1.test(nombre.value)) {

        document.getElementById("errores").innerHTML = "Nombre no válido"
        nombre.focus();

    } else {

        document.getElementById("errores").innerHTML = ""
        nombreCorrecto = true;

    }

}

function compruebaApellidos() {

    var apellidos = document.getElementById("apellidos");
    var patron1 = /^[a-zA-Z áéíóúÁÉÍÓÚÜüºª]{3,30}$/

    if (apellidos.value.length == 0) {

        document.getElementById("errores").innerHTML = "El apellido está vacío"
        apellidos.focus();

    } else if (apellidos.value.length < 3 || apellidos.value.length > 30) {

        document.getElementById("errores").innerHTML = "Longitud de apellidos incorrecta"
        apellidos.focus();

    } else if (!patron1.test(apellidos.value)) {

        document.getElementById("errores").innerHTML = "Apellidos no válidos"
        apellidos.focus();

    } else {

        document.getElementById("errores").innerHTML = ""
        apellidoCorrecto = true;

    }

}

function compruebaNif() {

    var nif = document.getElementById("nif");
    var patron1 = /^\d{2}[A-Z]{1}$/

    if (nif.value.length == 0) {

        document.getElementById("errores").innerHTML = "El NIF está vacío"
        nif.focus();

    } else if (nif.value.length != 9) {

        document.getElementById("errores").innerHTML = "Longitud de NIF incorrecta"
        nif.focus();

    } else if (!patron1.test(nif.value)) {
        F

        document.getElementById("errores").innerHTML = "NIF no válido"
        nif.focus();

    } else {

        document.getElementById("errores").innerHTML = ""
        nifCorrecto = true;

    }

}

function compruebaTelefono() {

    var telefono = document.getElementById("telefono");
    var patron1 = /^\d{9}$/

    if (telefono.value.length == 0) {

        document.getElementById("errores").innerHTML = "El teléfono está vacío"
        telefono.focus();

    } else if (telefono.value.length != 9) {

        document.getElementById("errores").innerHTML = "Longitud de teléfono incorrecta"
        telefono.focus();

    } else if (!patron1.test(telefono.value)) {

        document.getElementById("errores").innerHTML = "Teléfono no válido"
        telefono.focus();

    } else {

        document.getElementById("errores").innerHTML = ""
        telefonoCorrecto = true;

    }

}

function compruebaEmail() {

    var email = document.getElementById("email");
    var patron1 = /^.{3,20}@{1}.{3,30}(com|es)$/

    if (email.value.length == 0) {

        document.getElementById("errores").innerHTML = "El email está vacío"
        email.focus();

    } else if (email.value.length < 3 || email.value.length > 60) {

        document.getElementById("errores").innerHTML = "Longitud de email incorrecta"
        email.focus();

    } else if (!patron1.test(email.value)) {

        document.getElementById("errores").innerHTML = "Email no válido"
        email.focus();

    } else {

        document.getElementById("errores").innerHTML = ""
        emailCorrecto = true;

    }

}

function compruebaMatricula() {

    var matricula = document.getElementById("matricula");
    var patron1 = /^\d{4}[A-Z]{3}$/

    if (matricula.value.length == 0) {

        document.getElementById("errores").innerHTML = "La matricula está vacía"
        matricula.focus();

    } else if (matricula.value.length != 7) {

        document.getElementById("errores").innerHTML = "Longitud de matricula incorrecta"
        matricula.focus();

    } else if (!patron1.test(matricula.value)) {

        document.getElementById("errores").innerHTML = "Matricula no válida"
        matricula.focus();

    } else {

        document.getElementById("errores").innerHTML = ""
        matriculaCorrecto = true;

    }

}

function compruebaFecha() {

    var fecha = document.getElementById("fecha");
    var patron1 = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(202[2-4])$/

    if (fecha.value.length == 0) {

        document.getElementById("errores").innerHTML = "La fecha está vacía"
        fecha.focus();

    } else if (fecha.value.length != 10) {

        document.getElementById("errores").innerHTML = "Longitud de fecha incorrecta"
        fecha.focus();

    } else if (!patron1.test(fecha.value)) {

        document.getElementById("errores").innerHTML = "Fecha no válida"
        fecha.focus();

    } else {

        document.getElementById("errores").innerHTML = ""
        fechaCorrecto = true;

    }

}

function validar(evento) {

    var confirmar = confirm("¿Está seguro de que quiere enviar estos datos?");

    if (confirmar) {

        if (nombreCorrecto && apellidoCorrecto && nifCorrecto && telefonoCorrecto && emailCorrecto && matriculaCorrecta && fechaCorrecta) {

            document.getElementById("formulario").onsubmit;

        } else {

            alert("Hay campos incorrectos");
            evento.preventDefault();

        }

    } else {

        evento.preventDefault();

    }

}
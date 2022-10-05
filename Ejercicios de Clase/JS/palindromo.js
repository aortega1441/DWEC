var cadena = prompt("Introduce una cadena:");

var caracter = "";
var resultado = "";
for (var x = cadena.length; x >= 0; x--) {
    caracter = cadena.charAt(x);
    resultado = resultado + caracter;

}

var palindromo = "";
if (cadena == resultado) {
    palindromo = "ES";
} else {
    palindromo = "NO ES";
}

console.log(resultado);
alert("La cadena '" + cadena + "' " + palindromo + " palíndroma");
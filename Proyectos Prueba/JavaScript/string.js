let cadena = "Hola Mundo";

console.log(cadena);
console.log("Longitud de la cadena: " + cadena.length);
console.log("Mayúscula: " + cadena.toUpperCase());
console.log("Minúscula: " + cadena.toLowerCase());
console.log("Posición del carácter 'u': " + cadena.indexOf("u"));
console.log("Reemplazar un carácter: " + cadena.replace("u", "o"));
console.log("Reemplazar todos los caracteres de un tipo: " + cadena.replaceAll(" ", "-"));
console.log("Extraer caracteres entre dos posiciones: " + cadena.substring(5));
console.log("Extrae una parte y devuelve esa cadena comenzando desde atrás: " + cadena.slice(-3));
console.log("Elimina espacios de delante y de atrás de una cadena: " + cadena.trim());
console.log("Comprobar si una cadena empieza por lo especificado: " + cadena.startsWith("H"));
console.log("Comprobar si una cadena termina por lo especificado: " + cadena.endsWith("a"));
console.log("Comrpobar si la cadena incluye lo especificado: " + cadena.includes("Mundo"));

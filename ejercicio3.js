/**
 * . Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
el divisor es cero el programa debe mostrar un error, se debe manejar mediante
excepciones y el mensaje debe ser personalizado.
 */

try {
let diviendo = prompt("Ingrese el diviendo");
let divisor = prompt("Ingrese el divisor");
function dividir( a , b) {
    let resultado = a / b;
    return resultado;
}
alert(dividir(diviendo,divisor));

if (divisor == 0) {
    throw new Error("Error su divisor es (0)");
}

} catch (error) {
    console.error(`se produjo el siguiente ${error}`);
}




/**
 * Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
o impar
 */

let numero = prompt("Ingrese un numero entero");
let resultado = numero % 2;

while(resultado < 0){
    alert("No se aceptan valores negativos");
    numero = prompt("Ingrese un numero entero");
}if(resultado == 0) alert("El numero es par");
    else if(resultado != 0) alert("El numero es impar")
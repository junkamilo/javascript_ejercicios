let numero1 = prompt("ingrese el primer numero: ");
num1 = parseInt(numero1);
let numero2 = prompt("ingrese el segundo numero");
num2 = parseInt(numero2);
let numero3 = prompt("ingrese el tercer numero");
num3 = parseInt(numero3);
let numero4 = prompt("ingres el cuarto numero");
num4 = parseInt(numero4);

function obtenerOpracion(a , b , c , d) {
    let suma = a + b;
    let media = suma / 4;

    return`
    La media de los 4 valores ingresado es: ${suma}
    `
}
let resultado = obtenerOpracion(numero1,numero2,numero3,numero4);
alert(resultado);
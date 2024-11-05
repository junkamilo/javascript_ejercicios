let a = parseInt(prompt("Ingrese el primer numero: "));
let b = parseInt(prompt("Ingrese el segundo numero"));
let c = parseInt(prompt("Ingrese el tercer numero: "));

function calcularDatos(a,b,c) {
    let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b
    return`
    el resultado total de los tres valores son: ${resultado}
    `
}
let datos = calcularDatos(a , b , c);
alert(datos);
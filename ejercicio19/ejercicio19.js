let altura = parseInt(prompt("Ingrese la altura del cilindro"));
let radio = parseInt(prompt("Ingrese la radio del cilindro"));
function calcularCilindro(h , r) {
    const PI = 3.1416;
    let volumen = PI * Math.pow(r,2) * h
    let area = 2 * PI * r * h + 2 * PI * Math.pow(r,2);
    return`
    El AREA del cilindro es ${area}
    El VOLUMEN del cilindro es ${volumen}
    `
}
let resultado = calcularCilindro(altura, radio);
alert(resultado);
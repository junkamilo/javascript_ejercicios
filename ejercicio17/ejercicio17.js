let radio = parseInt(prompt("Ingrese el radio de la esfera"));
function calcularVolumen(a) {
    
    let PI = 3.1416
    let volumen = 3/4 * PI * Math.pow(a,3) ;
    return`
    El volumen de la esfera es ${volumen}
    `
}
let resultado = calcularVolumen(radio);
alert(resultado);
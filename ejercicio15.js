let radio = parseInt(prompt("Ingrese el radio de la circunferencia"));
function calcularCircunferencia(a) {
    const pi = 3.1416;
    let resultadoarea = pi * Math.pow(a,2)//Esta funcion hace que eleve la base a la potencia donde el primer valor es al que se va a elevar y el segundo por cuanto se va a elevar
    let diametro = a * 2;
    let resultadoLongitud = pi * diametro;
    return`
    la Longitud de la circuferencia es ${resultadoLongitud}
    el area de la circuferencia es ${resultadoarea}
    `
}
let circuferencia = calcularCircunferencia(radio)
alert(circuferencia);
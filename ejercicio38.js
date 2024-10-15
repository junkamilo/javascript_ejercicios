let CantidadTapas = parseFloat(prompt("Ingrese cantidad tapas recolectadas: "));
let precioTapas = parseFloat(prompt("Ingrese el precio de cada tapa vendida: "));

let resultadoTotal = CantidadTapas * precioTapas;
let resultadoMartin = (resultadoTotal * 2) / 3;
let resultadoJairo = resultadoTotal / 4;
let resultadolorena = resultadoTotal  - resultadoMartin - resultadoJairo;

console.log(`resultado total de las tapas vendidas ${resultadoTotal}`);
console.log(`Martin se lleva de ganancias: ${resultadoMartin.toPrecision(5)}`);
console.log(`Jairo se lleva de ganancias: ${resultadoJairo.toPrecision(5)}`);
console.log(`lorena se lleva de ganancias: ${resultadolorena.toPrecision(4)}`);
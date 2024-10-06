let Minuto = parseInt(prompt("Ingrese valor de los minutos hablados: "));
function calcularMinutos(M) {
    let totalMinutos = M * 355;
    let totalIva = totalMinutos * 0.2;
    let totalApagar = totalMinutos + totalIva;
    return `
    El Monto total a pagar por la llamada es ${totalApagar}
    `
}
let resultado = calcularMinutos(Minuto);
alert(resultado);
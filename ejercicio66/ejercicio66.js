let cantidad_invertir = parseFloat(prompt("Ingrese cantidad a invertir: "));
let interes_anuel = parseFloat(prompt("Ingrese el interes anuel: "));
let numero_años = parseFloat(prompt("Ingrese cantidad de años: "));

function inversion(C, I, N) {
    for (let contador = 1; contador <= N; contador++) {
        let monto_total = C * Math.pow(1 + I, contador);
        console.log(`Año ${contador}: y su capital obtenido es ${monto_total.toFixed(2)}`);
    }
}
inversion(cantidad_invertir,interes_anuel,numero_años);
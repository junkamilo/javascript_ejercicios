let suma = 0;
let resultadoNotas; 
for(let i = 0; i < 3;i++){
    let notaPar = parseFloat(prompt(`ingrese la nota numero ${i}`));
    suma += notaPar;
    resultadoNotas = suma * 0.55
}
let calFinal = parseFloat(prompt("Ingrese  calificacion de examen final"));
let restultadocalFinal = calFinal * 0.3;
let calTra = parseFloat(prompt("Ingrese calificacion del trabajo final"));
let traFinal = calFinal * 0.15; 

let promedioFinal = resultadoNotas + restultadocalFinal + calFinal / 3;
alert(promedioFinal);

let suma = 0;
const numNotas = 3;

for(let i = 0; i < numNotas;i++){
    let notaPar = parseFloat(prompt(`ingrese la nota numero ${i + 1}`));
    //validar que la nota sea un numero valido y este dentro del rango
    while(isNaN(notaPar) || (notaPar < 0) || (notaPar > 100)){
        alert("Dato incorrecto");
        notaPar =  parseFloat(prompt(`ingrese la nota numero ${i + 1}`));
    }
    suma += notaPar;
    
}
let promedioPar = suma / numNotas; 
let FinalPar = promedioPar * 0.55;

let calFinal = parseFloat(prompt("Ingrese  calificacion de examen final"));
while(isNaN(calFinal) || (calFinal < 0) || (calFinal > 100)){
    alert("Dato incorercto");
    calFinal = parseFloat(prompt("Ingrese  calificacion de examen final"));
}
let promediocalFinal = calFinal * 0.30;

let calTrafinal = parseFloat(prompt("Ingrese calificacion del trabajo final"));
while(isNaN(calTrafinal) || (calTrafinal < 0) || (calTrafinal > 100)){
    alert("Dato incorercto");
    calTrafinal = parseFloat(prompt("Ingrese  calificacion de examen final"));
}
let resultadoTrafinal = calTrafinal * 0.15;

let promedioFinal = FinalPar + promediocalFinal + resultadoTrafinal;
alert(`El promedio final es: ${promedioFinal}`);

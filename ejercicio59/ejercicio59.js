let edad = parseFloat(prompt("Ingrese la edad del postulante"));
let estatura = parseFloat(prompt("Ingrese la estatura del postulante"));
let peso = parseFloat(prompt("Ingrese el peso del postulante"));

function eleccion(edad,estatura,peso) {
    if((edad <= 19 && estatura > 175) && (peso > 75 && peso < 85)){
        alert("El postulante fue aprovado para la seleccion");
    }else{
        alert("El postulante no fue aprovado para la seleccion");
    }
}
eleccion(edad,estatura,peso);
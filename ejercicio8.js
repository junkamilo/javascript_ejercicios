/**
 * puntos que se pueden conseguir:
 * 0.0 = "Puntuacion inaceptable" * 2.400
 * 0.4 = "Puntuacion Aceptable" * 2.400
 * 0.6 > + = "Puntuacion meritotio" * 2.400
 */
let puntuacion = prompt("Ingrese su puntuacion (0.0) (0.4) (0.6)");
let puntos = parseFloat(puntuacion);
function valorintermedio(numero) {
    if(!isNaN(numero) && numero > 0.0 && numero < 0.6){
        alert("No se aceptan valores intermedio")
        puntuacion = prompt("Ingrese su puntuacion (0.0) (0.4) (0.6)");
        return true;
    }
}


let resultado;
if(puntos === 0.0){
    resultado = puntuacion * 2400;
    alert(`su nivel de rendimiento es Inaceptable y su cantidad de dinero a recibir es ${resultado}`);
}else if(puntos === 0.4){
    resultado = puntuacion * 2400;
    alert(`su nivel de rendimiento es Aceptable y su cantidad de dinero a recibir es ${resultado}`);
}else if(puntos === 0.6){
    resultado = puntuacion * 2400;
    alert(`su nivel de rendimiento es Meritorio y su cantidad de dinero a recibir es ${resultado}`);
}


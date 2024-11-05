let puntuacion;
let puntos;

//creamos una funcion para solicitar y validar la puntuacion ingresada
function obtenerPuntuacion() {
    puntuacion = prompt("Ingrese su puntuacion (0.0) (0.4) (0.6)");
    puntos = parseFloat(puntuacion);//convierte el dato ingresado String en float

    while(isNaN(puntos) || (puntos !== 0.0 && puntos !== 0.4 && puntos !== 0.6)){
        alert("Valor ingresado esta fuera del rango establecido ((0.0),(0.4),(0.3))");
        puntuacion = prompt("Ingrese su puntuacion (0.0) (0.4) (0.6)");
        puntos = parseFloat(puntuacion)

    }
}

obtenerPuntuacion();

let resultado = puntos * 2400;
let rendimiento;
if(puntos === 0.0){
    rendimiento = "Inaceptable"
}else if(puntos === 0.4){
    rendimiento = "Aceptable"
}else if(puntos >= 0.6){
   rendimiento = "Meritorio"
}
alert(`Su nivel de rendimiento es ${rendimiento} y su cantidad de dinero a recibir es ${resultado}.`);

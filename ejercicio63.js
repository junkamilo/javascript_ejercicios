let edad = parseFloat(prompt("Ingrese su edad para saber cuantos cumpleaños a tenido hasta la fecha: "));
function cumple(E) {
    for (let inicio = 1; inicio <= E; inicio++) {
        console.log(`cumpliste ${inicio}`);
        
    }
}
cumple(edad);
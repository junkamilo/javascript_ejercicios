let alto = parseInt(prompt("Ingrese el alto del elipsoide"));
let largo = parseInt(prompt("ingrese el largo del elipsoide"));
let ancho = parseInt(prompt("Ingrese el ancho del elipsoide"));

function calcularElipsoide( a , l , an) {
    volumen = (4/3) * Math.PI * a * l * an;
    return`
    El volumen del Elipsoide es ${volumen} m³
    `
}
let resultado = calcularElipsoide(alto,largo,ancho);
alert(resultado);
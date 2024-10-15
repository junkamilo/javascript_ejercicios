let precio_metros_cuadrados = parseFloat(prompt("Ingrese valor por m2"));
let largo_cuadrado = parseFloat(prompt("Ingrese el largo del cuadro de la pintura"));
let ancho_cuadrado = parseFloat(prompt("Ingrese el ancho del cuadro de pintura"));

function Calcular_precio(l,a,p) {
    let resultado_metros = l * a;
    let presupuesto_total = p * resultado_metros;
    alert(`su cuadro de pintura tiene ${resultado_metros} m2 y su presupuesto es ${presupuesto_total}`);
}
Calcular_precio(largo_cuadrado,ancho_cuadrado,precio_metros_cuadrados);
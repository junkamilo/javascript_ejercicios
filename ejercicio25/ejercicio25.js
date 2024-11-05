let valor = parseInt(prompt("Ingrese valor del producto"));
function calcularPorcentaje(V) {
    let porcentaje = V * 0.10;
    let descuento = V - porcentaje;
    alert(`El precio total a pagar es ${descuento}`)
}
calcularPorcentaje(valor);

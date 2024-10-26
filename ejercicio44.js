while (true) {
    let peso = parseFloat(prompt("Ingrese pesos colombianos:"));
    if (isNaN(peso) || peso < 0) {
        alert("Por favor, ingrese un valor numérico válido para pesos.");
        continue;
    }

    let valor = parseInt(prompt("Digite (1) para Dólares o (2) para Euros:"));
    if (valor !== 1 && valor !== 2) {
        alert("Opción no válida. Intente de nuevo.");
        continue;
    }

    let tasaCambio = valor === 1 ? 0.00023 : 0.00021;//quiere decir que la primera opcion se ejecuta cuando sea verdadera(1) y la segunda cuando es falsa(2) y el resultado se agrega a tasa de cambio.
    let moneda = valor === 1 ? "dólares" : "euros";
    let resultado = peso * tasaCambio;

    alert(`El cambio de moneda de pesos a ${moneda} es ${resultado.toFixed(2)} ${moneda}.`);
}

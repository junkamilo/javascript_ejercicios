while (true) {
    let entrada = prompt("Ingrese un número (o 'salir' para terminar):");
   
    if (entrada.toLowerCase() === 'salir') {
        break; // Termina el bucle si el usuario ingresa 'salir'
    }

    let numero = parseFloat(entrada);
   
    if (isNaN(numero)) {
        alert("Por favor, ingrese un valor numérico válido.");
        continue;
    }

    if (numero > 0 && numero < 100) {
        alert(`Tu número: ${numero} es positivo y menor a 100.`);
    } else if (numero < 0) {
        alert(`Tu número: ${numero} es negativo.`);
    } else if (numero > 100) {
        alert(`Tu número: ${numero} es mayor a 100.`);
    }
}
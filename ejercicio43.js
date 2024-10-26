let expresion = /"(?:[^"\\]*(?:\\.[^"\\]*)*)"|'(?:[^'\\]*(?:\\.[^'\\]*)*)'/;

while (true) {
    let cadenas = prompt("Ingrese cadena de texto (o escriba 'salir' para terminar)");

    // Opción para salir del bucle
    if (cadenas === 'salir') {
        break;
    }

    // Comprobación de la expresión regular
    if (expresion.test(cadenas)) {
        alert("Su cadena de texto tiene comillas y caracteres de escape.");
    } else {
        alert("Su cadena de texto no tiene comillas ni caracteres de escape.");
    }
}
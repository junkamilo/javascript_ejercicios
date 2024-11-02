let lado_rectangulo = parseFloat(prompt("Ingrese lado del rectangulo"));

function calcular_lado(lado) {
    while (lado < 0) {
        alert("Ingrese un numero positivo");
        lado = parseFloat(prompt("Ingrese lado del rectangulo"));
    }
    let resultado = lado_rectangulo * lado_rectangulo;
    alert(`el area del rectnagulo es: ${resultado}`);
}
calcular_lado(lado_rectangulo);


let numero1 = prompt("Ingrese primer numero");
number1 = parseInt(numero1);
let numero2 = prompt("Ingrese segundo numero");
number2 = parseInt(numero2);

function operacion(a , b) {
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;

        // el return devuelve un string que contiene los resultados de las operaciones
    return`
    Resultado:
    suma : ${suma}
    resta : ${resta}
    multiplicacion : ${multiplicacion}
    division : ${division}
    `

}
let resultado = operacion(numero1,numero2);//se llama la funcion con los valores ingresados de parametros
alert(resultado);
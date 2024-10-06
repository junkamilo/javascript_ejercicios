let a = parseInt(prompt("Ingrese el primer numero a evaluar"));
let b = parseInt(prompt("Ingrese el segundo numero a evaluar"));
let c = parseInt(prompt("Ingrese tercer valor a evaluar"));

/*function Calcularalgoritmo(a , b , c) {
    const x = 5;
    let resultado = a * Math.pow(x,2) + b + x + c;
    return`
    El resultado de las raices reales de los numeros(${a} ${b} ${c} es : ${resultado})
    `
}
let raizreal = Calcularalgoritmo(a , b , c);
alert(raizreal);*/

//Modificacion
function calculo(a , b , c) {
    let algoritmo = b **2 - 4 * a * c;

    if(algoritmo > 0){
        let x1 = (-b + Math.sqrt(algoritmo)) / (2 * a);
        let x2 = (-b - Math.sqrt(algoritmo)) / (2 * a);
        alert(`solucion 1: ${x1}
            solucion 2: ${x2}`);
    }else if(algoritmo === 0){
        let x = -b / (2 * a);
        alert(`solucion: ${x}`);
    }else{
        alert(`No tienen solucion, el algoritmo es negativo ${algoritmo}`);
    }
}

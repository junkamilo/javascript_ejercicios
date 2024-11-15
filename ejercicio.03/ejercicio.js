let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
function mayor(numero1,numero2) {
    if (numero1 > numero2) {
        alert(`El primer numero ${numero1} es mayor que el segundo numero ${numero2}`);
    }else{
        alert(`El segundo numero ${numero2} es mayor que el primer numero ${numero1}`);
    }
}
mayor(numero1,numero2);
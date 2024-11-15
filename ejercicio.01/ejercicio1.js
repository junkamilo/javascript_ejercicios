let numero1 = parseFloat(prompt("Ingrese el primero numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

function mayor(A , B) {
    if(A > B) {
        alert(`El numero ${A} es mayor que el numero ${B}`);
    }else if(B  > A){
        alert(`El numero ${B} es mayor que el numero ${A}`);
    }
}
mayor(numero1,numero2);
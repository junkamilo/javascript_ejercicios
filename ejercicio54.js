let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));


if(primer_numero > segundo_numero){
    let restar = primer_numero - segundo_numero;
    alert(`El resultado es: ${restar}`)
}else if(primer_numero < segundo_numero){
    alert(`El numero ${primer_numero} debe ser mayor a ${segundo_numero}`);
}



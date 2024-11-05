while(true){
let primer_valor = parseFloat(prompt("Ingrese primer valor"));
let segundo_valor = parseFloat(prompt("Ingrese segundo valor"));
let tercer_valor = parseFloat(prompt("Ingrese tercer valor"));

function Mayor(P , S , T) {
    if((P > S) && (P > T)){
        alert(`El numero ${P} es el mayor`)
    }else if((S > P) && (S > T)){
        alert(`El numero ${S} es el mayor`)
    }else{
        alert(`El numero ${T} es el mayor`);
    }
}
Mayor(primer_valor,segundo_valor,tercer_valor);
}
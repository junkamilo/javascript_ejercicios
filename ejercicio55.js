
function membresias() {
    let total = 0;
    let ingrese_precio = 1;
    while(true){
        ingrese_precio = parseFloat(prompt("Ingrese precio del producto y para terminar Ingrese (0): "));
        if (ingrese_precio === 0) {
            break;
        } else {
            total += ingrese_precio;
        }
        
    }
    alert("A cual membresia pertenece el cliente");
    let tipo_membresia = parseFloat(prompt("Digite '1' membrecia(A), Digite '2' membrecia(B), Digite '3' membrecia(C) "));
    if(tipo_membresia === 1){
        let descuento_A = total * 0.1;
        let resultado_A = total - descuento_A;
        alert(`Total precio a pagar es ${resultado_A}`)
    }else if(tipo_membresia === 2){
        let descuento_B = total * 0.15;
        let resultado_B = total - descuento_B;
        alert(`Total precio a pagar es ${resultado_B}`)
    }else if(tipo_membresia === 3){
        let descuento_C = total * 0.15;
        let resultado_C = total - descuento_C;
        alert(`Total precio a pagar es ${resultado_C}`)
    }
}
membresias();
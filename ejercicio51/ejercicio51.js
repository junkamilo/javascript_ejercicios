function calcular_pagos() {
    let total_pagos = 0;
    let pago_restaurante = 1;
    while (pago_restaurante !== 0) {
        pago_restaurante = parseFloat(prompt("Ingrese pagos restaurante, para terminar ingrese (0)"));
        total_pagos+= pago_restaurante;
    }if(total_pagos >= 130000){
        let descuento = total_pagos * 0.15;
        let total_pagar = total_pagos - descuento;
        alert(`Su compra excedio los $130.000 y se le hace un descuento del 15% por lo cual total a pagar es: ${total_pagar}`);
    }else if(total_pagos < 130000){
        alert(`Su compra no excedio los $130.000 por lo cual tendra que pagar: ${total_pagos}`);
    }
    
}
calcular_pagos();
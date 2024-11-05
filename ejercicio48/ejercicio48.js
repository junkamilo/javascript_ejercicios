let figura_geometrica = parseFloat(prompt("Ingrese (1) para Tringulo O Ingrese (2) para Circulo"));
function elegir_figura(figura_geometrica) {
    if(figura_geometrica === 1){
        let triangulo_base = parseFloat(prompt("Ingrese la base del triangulo"));
        let triangulo_altura = parseFloat(prompt("Ingrese altura del triangulo"));
        let triangulo= triangulo_base * triangulo_altura / 2;
        alert(`El resultado del tringulo es: ${triangulo}`);
    }else{
        let radio_circulo = parseFloat(prompt("Ingrese el radio del circulo"));
        let circulo= 3.1416 * radio_circulo * radio_circulo;
        alert(`El resultado del tringulo es: ${circulo}`);
    }
}
elegir_figura(figura_geometrica);
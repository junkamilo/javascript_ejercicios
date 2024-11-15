function validar() {
    let numero = parseFloat(prompt("Ingrese numero de contraseña minimo 4 caracteres a maximo 6 caracteres"));
    let pin = /^-?\d{4,6}/;
    if (pin.test(numero)) {
        console.log(`Su contraseña ingresada ${numero} cumple con los parametros`);
    }else{
        console.log(`Su contraseña ingresada ${numero} no cumple con los parametros`);
        
    }
}
validar();
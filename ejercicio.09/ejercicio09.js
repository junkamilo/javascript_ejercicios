let numero = prompt("Ingrese numero de contraseña minimo 4 caracteres a maximo 6 caracteres");

let validar = (contraseña) => {
    let validar = /^\d{4,6}$/;
    if(validar.test(contraseña)){
        console.log(`Su contraseña ingresada ${numero} cumple con los parametros`);
    }else{
        console.log(`Su contraseña ingresada ${numero} no cumple con los parametros`);
    }
}
validar(numero);
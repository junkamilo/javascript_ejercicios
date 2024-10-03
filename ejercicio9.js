let edades;
let edad;
function obtenerEdad() {
    edades = prompt("Por favor ingrese su edad");
    edad = parseInt(edades);
    while(isNaN(edad) || edad < 0){
        alert("Edad NO valida");
        edades = prompt("Por favor ingrese su edad");
        edad = parseInt(edades);
    }
}
obtenerEdad();
let pago;
if(edad < 4){
    pago = "Puede entrar gratis"
}else if(edad >= 4 && edad <= 18){
    pago = "su boleta le cuesta 5"
}else if(edad > 18){
    pago = "su boleta le cuesta 10"
}

alert(`Su edad es de ${edad} y ${pago}`)
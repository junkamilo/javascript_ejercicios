/**
 * escribir un programa que almacene la cadena de caracteres contraseña de una variable,
pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos. 
 */

let contraseña = "junka123"

function accion() {
    return/^[a-zA-Z0-9]+$/.test(input);
}
let contraseña2 = prompt("Ingrese su contraseña");
while(contraseña.toLowerCase() != contraseña2.toLowerCase())
    {
        alert("Contraseña incorrecta");
        contraseña2 = prompt("Ingrese su contraseña");
    }
    if(contraseña.toLowerCase() === contraseña2.toLowerCase()) alert("Contraseña correcta");
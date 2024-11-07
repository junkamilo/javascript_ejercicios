/**
 * . Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
menor de edad, el programa debe validar que solo se puedan ingresar números positivos.
 */

 function usuario() {
    let edad = prompt("Ingrese su edad ");

    while(edad < 0){
    alert("solo se puede ingresar numeros positivos");
    edad = prompt("Ingrese su edad "); }

    edad = Number(edad);

    if(edad >= 18) alert("Eres mayor de edad");
     else alert("Eres menor de edad");
 }
  usuario();


  




let numero = parseFloat(prompt("Ingrese un numero entero: "));

function triangulo(num){
    for(let contador = 0; contador < num; contador++){
        console.log("*".repeat(contador+1));
        
    }
}
triangulo(numero);
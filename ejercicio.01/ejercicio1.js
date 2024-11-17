function ingresar_numero() {
let numeros = [];
let num;
    while(true){
        num = parseInt(prompt("Ingrese numeros (0 para terminar)"));
        if(num === 0){
            break;
        }else{
            numeros.push(num);
        }
    }
    console.log("Los numeros ingresados fueron: ",numeros);
    return numeros;
    
}
function mayores(numeros) {
    return numeros.reduce((num1,num2) => Math.max(num1,num2), -Infinity);
}
let numbers = ingresar_numero();
let mayor = mayores(numbers);
console.log("El numero mayor es: " ,  mayor);


 
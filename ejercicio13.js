/*let numero1 = parseInt(prompt("ingrese el primer numero: "));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let numero3 = parseInt(prompt("ingrese el tercer numero"));
let numero4 = parseInt(prompt("ingres el cuarto numero"));

function obtenerOpracion(a , b , c , d) {
    let suma = a + b + c + d;
    let media = suma / 4;

    return`
    La media de los 4 valores ingresado es: ${media}
    `
}
let resultado = obtenerOpracion(numero1,numero2,numero3,numero4);
alert(resultado);*/

//codigo sin declarar los 4 numeros

function media(...numeros) {
    let arreglo = numeros[0];
    alert(arreglo);
    let sum = 0;
    for(let num of numeros){
        sum += num;
    }
    let media = sum / numeros.length;
    return media;
}
let numeros = [];

while(true){
    let num = parseFloat(prompt(`
        Ingrese el numero
        (0) para salir`))

        if(num != 0){
            numeros.push(num);
        }else{
            break;
        }
}
let resultado = media(numeros);
alert(resultado);
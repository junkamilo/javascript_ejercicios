let numero = parseFloat(prompt("Ingrese un numero: "));

function impares(num) {
    for (let impar = 1; impar <= num; impar++) {
        if(impar % 2 !== 0){
            console.log(`Numero impar ${impar}`);
            
        }
    }
}
impares(numero);
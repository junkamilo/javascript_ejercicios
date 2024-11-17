let tabla_multiplicar = (numero,descartar) => {
    for(let i = 1; i <= 10; i++){
        let resultado = numero * i;
        if(resultado === descartar){
            continue;
        }
        console.log(`${numero} * ${i} = ${resultado}`);
    }
}
tabla_multiplicar(5,25);
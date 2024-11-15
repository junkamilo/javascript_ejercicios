function tablaMultiplicar(numero,descartar) {
    for(let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        if (resultado === descartar) {
            continue;
        }
        console.log(`${numero} * ${i} = ${numero * i}`);
    }
}
tablaMultiplicar(5,25);
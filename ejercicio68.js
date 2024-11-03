function tablas_multiplicar() {
    for (let i = 1; i <= 10; i++) {
        console.log(`tabla del ${i}`);
        
        for (let b = 1; b < 10; b++) {
            console.log(`${i} x ${b} = ${i * b}`);
        }
        console.log('');
    }
}
tablas_multiplicar();
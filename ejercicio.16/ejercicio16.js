let textual = (numero) =>{
    let texto_numero = {
        0: 'cero',
        1: 'uno',
        2: 'dos',
        3: 'tres',
        4: 'cuatro',
        5: 'cinco',
        6: 'seis',
        7: 'siete',
        8: 'ocho',
        9: 'nueve',
        10: 'diez'
    }
    return texto_numero[numero];
}
console.log(textual(10));

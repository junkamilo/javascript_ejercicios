let palabra = prompt("Ingrese la palabra");

function invertir(pal) {
    let invertir = pal.split('').reverse().join('');
    console.log(invertir);
    
}
invertir(palabra);
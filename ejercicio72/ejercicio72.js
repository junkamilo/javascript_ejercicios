function ejecutar_palabra() {
    let palabra = prompt("Ingrese una palabra: ");
    console.log(palabra.split('').reverse().join(''));   
}

ejecutar_palabra();
let palabra = prompt("Ingrese una palabra: ");

let contar = (pal) => {
    let cantidad_vocal = /[aeiuoáéíóú]+/gi;
    let resultado = pal.match(cantidad_vocal);
    let total_vocales = resultado ? resultado.length : 0;
    alert(`La palabra ingresada ${pal} tiene ${resultado} de vocales y cuenta con ${total_vocales} vocales`);
}
contar(palabra);
let palabra = prompt("Ingrese una palbra: ");

function silabas(palabra) {
    let silabas = palabra.match(/[aeiuoáéíóú]+/gi);
    let contar_silaba = silabas.length;
    return contar_silaba;
}
let resultado = silabas(palabra);
alert(`Su palabra contiene ${resultado} silabas`);
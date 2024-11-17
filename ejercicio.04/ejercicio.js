let palabra = prompt("Ingrese una palabra: ");
const largo = (palabra) => palabra.length > 5 ? alert(`La palabra que fue ingresada ${palabra} es larga`) : alert(`La palabra que fue ingresada ${palabra} es corta`);
largo(palabra);

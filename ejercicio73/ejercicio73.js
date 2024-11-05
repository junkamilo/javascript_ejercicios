let frase = prompt("Ingrese una frase: ");
let palabra = prompt("Ingrese una palabra: ");

function numero_palabra(frase, palabra) {
    let coincidencias = frase.match(new RegExp(palabra, 'gi'));
    if(frase.includes(palabra)){
        alert(`La palabra ${palabra} se encuentra en la frase`);
        alert(`Y la palabra ${palabra} se encuentra en la frase ${coincidencias.length} veces`);
        
    }else{
        alert(`La palabra ${palabra} no se encuentra en la frase`);
        
    }
}
numero_palabra(frase,palabra);
let palabra = prompt("Ingrese una palabra: ");

function Larga_corta(palabra) {
    let pal = palabra.length;
    if (pal > 5) {
        alert(`Su palabra ${palabra} es larga ya que contiene mas de 5  caracteres`);
    }else if(pal < 5){
        alert(`Su palabra ${palabra} es corta ya que contiene menos de 5 caracteres`);
    }
}

Larga_corta(palabra);

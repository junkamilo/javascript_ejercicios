let palabra = prompt("Ingrese una palabra para mostrarla de forma inversa");

let inversa = (pal)=>{
    return pal.split("").reverse().join("");
}
console.log(`${inversa(palabra)}`);
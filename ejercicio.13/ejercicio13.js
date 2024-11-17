let palabra = prompt("Ingrese una palabra");

let vocal = (vol)=>vol.replace(/[aáeéiíoóuú]/gi,'');
let sinVocales = vocal(palabra);
console.log(sinVocales);

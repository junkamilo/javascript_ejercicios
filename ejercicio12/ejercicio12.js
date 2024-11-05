let largo = prompt("Ingrese el largo del rectangulo");
lar = parseInt(largo);
let ancho = prompt("ingrese el ancho del rectangulo");
anc = parseInt(ancho);

function proceso(L , A) {
    area = L * A ;
    return`
    El area del rectangulo es ${area}
    `
}
let resultado = proceso(largo,ancho);
alert(resultado);
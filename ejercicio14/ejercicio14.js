let largo = parseInt(prompt("Ingrese el largo del rectangulo"));
let ancho = parseInt(prompt("Ingrese el ancho del rectangulo"));
function Calculararea(a , b) {
area = a * b    
return`
el area del rectangulo es ${area}
`
}
let resultado = Calculararea(largo,ancho);
alert(resultado);
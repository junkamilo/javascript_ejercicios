let numero = parseFloat(prompt("Escriba un numero flotante: "));
function verificarFlotante(F) {
    if(Number.isInteger(F)){
        alert("No es un numero flotante");
    }else{
        alert("Es un numero flotante")
    }
}
verificarFlotante(numero);
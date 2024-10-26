let frase = prompt("Ingresa una frase que te identifique como programador");

function inveritr_frase(frase) {
    let invierte = frase.split("");
    console.log(invierte.reverse().join(""));
    
}
inveritr_frase(frase);
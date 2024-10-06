let centigrados = parseInt(prompt("Ingrese los centigrados"));
function calcularCentigrados(C) {
    let resultado = (C * 9/5) + 32;
    
    alert(`
    Los grados Fahrenhet es ${resultado}
    `)
}
calcularCentigrados(centigrados);
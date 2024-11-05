let harina = 100;

function CalcularHarina(h) {
    let resultadoHarina = h + h;
    return`
    La harina total que se le debe agregar es ${resultadoHarina}
    `
}
let resultadoTotal = CalcularHarina(harina);
alert(resultadoTotal);
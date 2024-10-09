let Año_hijo = parseFloat(prompt("Ingrese el año actual en la cual nacio el bebe"));
let Año_madre = parseFloat(prompt("Ingrese el año en la cual nacio la madre"));

function CalcularEdad(H , M) {
    let año_total = H - M;
    alert(`
    La madre del niño tiene ${año_total} de edad
    `)
}
CalcularEdad(Año_madre,Año_hijo);
let libros_precio = 10000;
let cuadernos_precio = 7550;
let lapiceros_precio = 5550;
let libros = 0;
let cuadernos = 0;
let lapiceros = 0;

function mostrarResultados() {
    let resultado_libros = libros * libros_precio;
    let resultado_cuadernos = cuadernos * cuadernos_precio;
    let resultado_lapiceros = lapiceros * lapiceros_precio;
    let total_venta = resultado_libros + resultado_cuadernos + resultado_lapiceros;
   
    console.log(`Venta total de libros: ${resultado_libros}`);
    console.log(`Venta total de cuadernos: ${resultado_cuadernos}`);
    console.log(`Venta total de lapiceros: ${resultado_lapiceros}`);
    console.log(`Venta total: ${total_venta}`);
}

let inicio = parseFloat(prompt("Para agregar una cuenta inicie con (1) y para mostrar resultado (0)"));
while (inicio !== 0) {
    let venta = parseFloat(prompt("¿Cuál venta desea ejecutar? libros(1), cuaderno(2), lapiceros(3)"));
   
    if (venta === 1) {
        let vendido;
        do {
            vendido = parseFloat(prompt("Para agregar libros vendidos (1) o terminar (0)"));
            if (vendido === 1) {
                libros++;
            }
        } while (vendido !== 0);
       
    } else if (venta === 2) {
        let vendido;
        do {
            vendido = parseFloat(prompt("Para agregar cuadernos vendidos (1) o terminar (0)"));
            if (vendido === 1) {
                cuadernos++;
            }
        } while (vendido !== 0);
       
    } else if (venta === 3) {
        let vendido;
        do {
            vendido = parseFloat(prompt("Para agregar lapiceros vendidos (1) o terminar (0)"));
            if (vendido === 1) {
                lapiceros++;
            }
        } while (vendido !== 0);
       
    } else {
        alert("Error: opción no válida");
    }
   
    inicio = parseFloat(prompt("Para agregar una cuenta inicie con (1) y para mostrar resultado (0)"));
}

mostrarResultados();
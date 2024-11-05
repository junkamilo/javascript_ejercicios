let primer_producto = parseFloat(prompt("Ingrese el precio del (1) producto"));
let segundo_producto = parseFloat(prompt("Ingrese el precio del (2) producto"));
let tercer_producto = parseFloat(prompt("Ingrese el precio del (3) producto"));
let cuarto_producto = parseFloat(prompt("Ingrese el precio del (4) producto"));
let quinto_producto = parseFloat(prompt("Ingrese el precio del (5) producto"));

/*let productoPS = (primer_producto + segundo_producto) * 0.5;
let total = (primer_producto + segundo_producto) - productoPS;
alert(total);*/

function ObtenerPorcentaje(p,s,t,c,q) {
    let productoPS = (p + s) * 0.05;
    let totalPS = (p + s) - productoPS;
    let productoCQ = (c + q) * 0.02;
    let totalCQ = (c + q) - productoCQ;

    let totalProductos = totalPS + t + totalCQ

    return `
    El Monto total a pagar es ${totalProductos}
    `
    
}
let productos = ObtenerPorcentaje(primer_producto,segundo_producto,tercer_producto,cuarto_producto,quinto_producto);
alert(productos);s
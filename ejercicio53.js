let primer_producto = parseFloat(prompt("Ingrese el valor del primer producto: "));
let segun_producto = parseFloat(prompt("Ingrese el valor del segundo producto: "));
let tercer_producto = parseFloat(prompt("Ingrese el valor del tercer producto: "));
let cuarto_producto = parseFloat(prompt("Ingrese el valor del cuarto producto: "));
let quinto_producto = parseFloat(prompt("Ingrese el valor del quinto producto: "));

function valor_total(p,s,t,c,q) {
    let suma_productos = p + s + t + c + q;
    let iva = suma_productos * 1.21;
    let subtotal = suma_productos * 5;
    let total_compra = suma_productos + iva + subtotal;
    alert(`resultado iva: ${iva}, resultado subtotal: ${subtotal}, resultado total compra ${total_compra}`);
}
valor_total(primer_producto,segun_producto,tercer_producto,cuarto_producto,quinto_producto);


let nombres = [];
let horas = [];
let precio = [];
let nombreEmpleado = prompt("Ingrese nombre del empleado");
let horasTrabajo = parseFloat(prompt("Ingrese horas trabajadas por el empleado"));
let pagoHora = parseFloat(prompt("Ingrese precio por hora"));
let Totalsueldo = horasTrabajo * pagoHora;
alert(`el Nombre del empledo es ${nombreEmpleado} y su sueldo es de ${Totalsueldo}`);
/*let dato = -1; //por mejorar el while
while(dato !== 0){
    dato = parseFloat(prompt("Decea evaluar otro empleado 1(SI) / 0(NO) o Decea ver resultado"));
    nombreEmpleado = prompt("Ingrese nombre del empleado");
    horasTrabajo = parseFloat(prompt("Ingrese horas trabajadas por el empleado"));
    pagoHora = parseFloat(prompt("Ingrese precio por hora"));
    alert(`el Nombre del empledo es ${nombreEmpleado} y su sueldo es de ${Totalsueldo}`);
} */
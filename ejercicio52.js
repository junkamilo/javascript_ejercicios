let trabajador = parseFloat(prompt("Ingrese (1)PLANTA, Ingrese (2)ADMINISTRATIVO"));
if(trabajador === 1){
    let hora_trabajada = 20000;
    let total_horas = parseFloat(prompt("Ingrese total de horas trabajadas en planta"));
    let total = hora_trabajada * total_horas;
    alert(`El pago del trabajador de platna seria: ${total}`);
}else if(trabajador === 2){
    let hora_trabajada = 10000;
    let total_horas = parseFloat(prompt("Ingrese total de horas trabajadas en administracion"));
    let total = hora_trabajada * total_horas;
    alert(`El pago del trabajador de administracion seria: ${total}`);
}
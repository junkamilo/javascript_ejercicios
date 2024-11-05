let temperatura = parseFloat(prompt("Ingrese temperatura del objeto"));
let presion = parseFloat(prompt("Ingrese presion del objeto"));

function calcular(T,P) {
    if(T > 100 || P > 200){
        alert("Alarma")
    }else{
        alert("Normal");
    }

}
calcular(temperatura,presion)
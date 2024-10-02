let rentaAnual = parseInt(prompt("Ingrese su renta anual"));

let resultado = 0;

while(isNaN(rentaAnual) || rentaAnual < 10000){
    alert("Monto incorrecto");
    rentaAnual = parseInt(prompt("Ingrese su renta anual"))
}

if(rentaAnual >= 10000 && rentaAnual < 20000) resultado = 0.05;
else if(rentaAnual >= 20000 && rentaAnual < 35000) resultado = 0.1;
else if(rentaAnual >= 35000 && rentaAnual < 60000) resultado = 0.2;
else if(rentaAnual >=60000) resultado = 0.45;

alert(`el impusitivo que le corresponde es de $${rentaAnual*resultado}`);




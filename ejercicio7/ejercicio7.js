let rentaAnual = parseFloat(prompt("Ingrese su renta anual"));

/*let resultado = 0;

while(isNaN(rentaAnual) || rentaAnual < 10000){
    alert("Monto incorrecto");
    rentaAnual = parseInt(prompt("Ingrese su renta anual"))
}

if(rentaAnual >= 10000 && rentaAnual < 20000) resultado = 0.05;
else if(rentaAnual >= 20000 && rentaAnual < 35000) resultado = 0.1;
else if(rentaAnual >= 35000 && rentaAnual < 60000) resultado = 0.2;
else if(rentaAnual >=60000) resultado = 0.45;

alert(`el impusitivo que le corresponde es de $${rentaAnual*resultado}`);*/

//Mejorado

while(rentaAnual < 0){
    alert("valor invalido");
    rentaAnual = parseFloat(prompt("Ingrese su renta anual"));
}if(rentaAnual > 0 && rentaAnual < 1000){
    alert("No tendra imporistivo");
}else{
    if(rentaAnual > 0 && rentaAnual < 1000){
        alert("No tendra impositivo");
    }else if(rentaAnual >= 10000 && rentaAnual < 20000){
        alert(`El impositivo es del 5% (${rentaAnual.toFixed(2) * 0.05})`);
    }else if(rentaAnual >= 20000 && rentaAnual < 35000){
        alert(`El impositivo es del 10% (${rentaAnual.toFixed(2) * 0.1})`);
    }else if(rentaAnual >= 35000 && rentaAnual < 60000){
        alert(`El impositivo es del 20% (${rentaAnual.toFixed(2) * 0.2})`);
    }else{
        alert(`El impositivo es del 45% (${rentaAnual.toFixed(2) * 0.45})`);
    }
}


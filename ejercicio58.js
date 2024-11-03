let mes = prompt("Ingrese nombre del mes para saber su signo sodiacal: ");
let fecha_mes = parseFloat(prompt(`Ingrese el dia de su naciemiento de su mes ${mes}`));
if(mes === "enero"){
    if(fecha_mes >= 20 && fecha_mes <=30 ){
        alert("Eres aquario");
    }else{
        if(mes === "febrero"){
            if(fecha_mes >= 1 && fecha_mes <= 18){
                alert("Eres aquario");
            }
        }
    }
}else if(mes === "febrero"){
    if(fecha_mes >= 19 && fecha_mes <= 28){
        alert("Eres pisces")
    }else{
        if(mes === "marzo"){
            if(fecha_mes >= 20 && fecha_mes <= 31){
                alert("Eres pisces");
            }
        }
    }
}else if(mes === "marzo"){
    if(fecha_mes >= 21 && fecha_mes <= 31){
        alert("Eres Aries")
    }else{
        if(mes === "abril"){
            if(fecha_mes >= 19 && fecha_mes <= 30){
                alert("Eres Aries");
            }
        }
    }
}else if(mes === "abril"){
    if(fecha_mes >= 20 && fecha_mes <= 30){
        alert("Eres Taurus")
    }else{
        if(mes === "mayo"){
            if(fecha_mes >= 1 && fecha_mes <= 20){
                alert("Eres Taurus");
            }
        }
    }
}else if(mes === "mayo"){
    if(fecha_mes >= 21 && fecha_mes <= 31){
        alert("Eres Gemini");
    }else{
        if(mes === "junio"){
            if(fecha_mes >= 20 && fecha_mes <= 30){
                alert("Eres Gemini");
            }
        }
    }
}else if(mes === "junio"){
    if(fecha_mes >= 21 && fecha_mes <= 30){
        alert("Eres Cancer");
    }else{
        if(mes === "julio"){
            if(fecha_mes >= 22 && fecha_mes <= 31){
                alert("Eres Cancer");
            }
        }
    }
}else if(mes === "julio"){
    if(fecha_mes >= 23 && fecha_mes <= 31){
        alert("Eres Leo");
    }else{
        if(mes === "agosto"){
            if(fecha_mes >= 22 && fecha_mes <= 31){
                alert("Eres Leo");
            }
        }
    }
}else if(mes === "agosto"){
    if(fecha_mes >= 23 && fecha_mes <= 31){
        alert("Eres Virgo");
    }else{
        if(mes === "septiembre"){
            if(fecha_mes >= 22 && fecha_mes <= 30){
                alert("Eres Virgo");
            }
        }
    }
}else if(mes === "septiembre"){
    if(fecha_mes >= 23 && fecha_mes <= 30){
        alert("Eres Libra");
    }else{
        if(mes === "octubre"){
            if(fecha_mes >= 22 && fecha_mes <= 31){
                alert("Eres Libra");
            }
        }
    }
}else if(mes === "octubre"){
    if(fecha_mes >= 23 && fecha_mes <= 31){
        alert("Eres Scorpio");
    }else{
        if(mes === "noviembre"){
            if(fecha_mes >= 21 && fecha_mes <= 30){
                alert("Eres Scorpio");
            }
        }
    }
}else if(mes === "noviembre"){
    if(fecha_mes >= 22 && fecha_mes <= 30){
        alert("Eres Sagittarius");
    }else{
        if(mes === "diciembre"){
            if(fecha_mes >= 21 && fecha_mes <= 31){
                alert("Eres Sagittarius");
            }
        }
    }
}else if(mes === "diciembre"){
    if(fecha_mes >= 22 && fecha_mes <= 31){
        alert("Eres Sagittarius");
    }else{
        if(mes === "enero"){
            if(fecha_mes >= 19 && fecha_mes <= 30){
                alert("Eres Sagittarius");
            }
        }
    }
}

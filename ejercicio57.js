let calificacion = parseFloat(prompt("Ingrese calificacion: "));

if(calificacion > 9.1 && calificacion < 10){
alert("Tu calificacipn es (A) EXCELENTE");
}else if(calificacion > 8.1 && calificacion < 9){
alert("Tu calificacion es (A) MUY BIEN")
}else if(calificacion > 7.5 && calificacion < 8){
alert("Tu calificacion es (A) BIEN")
}else if(calificacion < 7.5){
alert("Tu calificacion es (NA) NO APROVADO")
}
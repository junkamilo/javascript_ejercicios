function Obtener_calificacion() {
    let Num_calificaciones = 4;
    let sumaCalificacion = 0;
    let promedio_total = 0;
    alert("La calificacion va desde (1) hasta el (5)");
    for(let i = 0; i < Num_calificaciones;i++){
        let calificacion = parseFloat(prompt(`ingrese la ${i + 1} calificacion del estudiante: `));

        while(isNaN(calificacion) || (calificacion  < 0) || (calificacion > 5) ){
            alert("¡Dato Incorrecto!-La calificacion va desde (1) hasta el (5)");
            calificacion = parseFloat(prompt(`ingrese la ${i + 1} calificacion del estudiante: `));
        }
        sumaCalificacion += calificacion;
        promedio_total = sumaCalificacion / 4;
    }
    alert(`El promedio del estudiante es de ${promedio_total}`);
    
}
Obtener_calificacion();
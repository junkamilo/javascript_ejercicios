let Año_vigente = parseFloat(prompt("Ingrese el año actual de la entrevista"));
let Año_persona = parseFloat(prompt("Ingrese año de nacimiento del entrevistado"));

function Calcular_edad(v,p) {
    let año_persona = v - p;
    alert(`La persona entrevistada tiene ${año_persona} de edad`);
}
Calcular_edad(Año_vigente,Año_persona);
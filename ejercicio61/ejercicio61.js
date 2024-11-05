let ingresar_notas = [];
let ingresar = ingresar_notas;
while(true){
    ingresar = parseFloat(prompt("Ingrese notas del estudiantes y para terminar ingrese (0): "));
    if(ingresar === 0){
        break;
    }else{
        ingresar_notas.push(ingresar);
    }
}
let notaMAx = Math.max(...ingresar_notas);//Math.max() es una funcion que recoore un array para sacar la nota mas alta.
let notaMin = Math.min(...ingresar_notas);//Math.min() es una funcion que recorre un array para sacar una nota minima.
let notaAlta = ingresar_notas.filter(function (num) {return num === 100;}).length;//num es una variable que va a guardar la funcion que se  cumple.
let resultadoA = ingresar_notas.filter(function (num) {return num < 100 && num >= 90;}).length;
let resultadoB = ingresar_notas.filter(function (num) {return num < 90 && num >= 80;}).length;
let resultadoC = ingresar_notas.filter(function (num) {return num < 80 && num >= 70;}).length;
let resultadoD = ingresar_notas.filter(function (num) {return num < 70 && num >= 60;}).length;

console.log(`Las notas ingrasadas fueron:  ${ingresar_notas}`);
console.log(`La nota alta ingresada es:  ${notaMAx}`);
console.log(`La nota baja ingresada es:  ${notaMin}`);
console.log(`Estudiantes que obtuvieron la maxima nota de 100:  ${notaAlta}`);
console.log(`Estudiante que sacaron notas (A)=(90-100):  ${resultadoA}`);
console.log(`Estudiante que sacaron notas (B)=(80-90):  ${resultadoB}`);
console.log(`Estudiante que sacaron notas (C)=(70-80):  ${resultadoC}`);
console.log(`Estudiante que sacaron notas (D)=(60-70):  ${resultadoD}`);






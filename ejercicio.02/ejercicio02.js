let arreglo = [2];
function par(number_par) {
    let par = number_par.forEach((num) =>{
        if (num % 2 == 0) {
            console.log("El numero es par" , num);
            
        }else{
            console.log("El numero es impar" , num);
            
        }
    });
    return par
    
}
par(arreglo);





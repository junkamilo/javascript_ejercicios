function numeroMayor() {
    let arreglo = [];
    let ingresar;
    while(true){
        ingresar = prompt("Ingrese numero y para terminar digite (salir)");
        if (ingresar.toLocaleLowerCase() === "salir") {
            break;
        }
        let numero = parseFloat(ingresar);
        if (!isNaN(numero)) {
            arreglo.push(numero);
        }else{
            alert("Error, no es un numero");
        }
    }
    if (arreglo.length > 0) {
        let numero_mayor = Math.max(...arreglo);
         console.log("El numero mayor es: " , numero_mayor);
         
    }else{
        console.log("No hay numeros en el arreglo");
    }
}
numeroMayor();
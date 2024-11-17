let numeros = [-2, -5, 3, 7, 10];

let sumar = (num) => {
    let suma_total = num.filter(valor => valor >= 0).reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log("Suma total de los números ingresados:", suma_total);
    return suma_total;
}

sumar(numeros);




// function sumar_numeros() {
//     let numeros = [];  // Array para almacenar los números ingresados.
//     let ingresar;      // Variable para almacenar el número ingresado.

//     while (true) {
//         // Solicitar al usuario ingresar un número.
//         ingresar = parseFloat(prompt("Ingrese números y para terminar digite 0"));

//         // Si el usuario ingresa 0, salimos del ciclo.
//         if (ingresar === 0) {
//             break;
//         }

//         // Si el número es negativo, retornamos 0 y salimos de la función.
//         if (ingresar < 0) {
//             alert("Se detectó un número negativo. El resultado es 0.");
//             return 0;
//         }

//         // Si el número es positivo, lo agregamos al array.
//         numeros.push(ingresar);
//     }

//     // Sumar todos los números en el array.
//     let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

//     // Mostrar el resultado de la suma.
//     console.log("Suma total de los números ingresados:", suma);
//     return suma;  // Retornamos la suma.
// }

// sumar_numeros();
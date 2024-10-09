let x1 = parseFloat(prompt("Ingrese la ubicacion de (X1)"));
let y1 = parseFloat(prompt("Ingrese la ubicacion de (Y1)"));
let x2 = parseFloat(prompt("Ingrese la ubicacion del (X2)"));
let y2 = parseFloat(prompt("Ingrese la ubiacion del (Y2)"));

let distancia = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));//Mat.pow es para elevar y el , XNUMero es por el cual vamos a elevarlo
alert(`La distancia de los dos puntos es ${distancia.toFixed(2)}`);//toFixed es para resumir numeros flotante

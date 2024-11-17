let mayor = [5,10,90,30,50,100,10];
let mayor_numero = (mayor)=>{
        return mayor.reduce((num1,num2)=>{
        return Math.max(num1,num2);
    });
}
console.log(`El numero mayor es: ${mayor_numero(mayor)}`);


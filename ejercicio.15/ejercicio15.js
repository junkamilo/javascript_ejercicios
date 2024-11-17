let num_aleatorio = (num)=>{
    let par = Math.floor(Math.random() * num) + 1;
    if(par % 2 === 0){
        alert(`El numero generado ${par} es par`);    
    }else{
        alert(`El numero generado ${par} es impar`);
    }
    return par;
}
let numeros = num_aleatorio(10);
console.log(numeros);

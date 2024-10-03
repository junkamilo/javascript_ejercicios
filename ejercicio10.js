
let pizza_vegetariana = []
pizza_vegetariana.push('Pimiento');
pizza_vegetariana.push('Tofu');

let pizza_vegana = []
pizza_vegana.push('Peperoni');
pizza_vegana.push('Jamon');
pizza_vegana.push('salmon');

function obtenrPizza() {
   let pizza = prompt("Decea una pizza vegetariana (SI) o (NO)");


    if(pizza.toUpperCase() === 'SI'){
        alert("Menu de la pìzza vegetariana");
        for(let i = 0; i < pizza_vegetariana.length;i++){
            alert(`- ${pizza_vegetariana[i]}`);
        }
        
    }else if(pizza.toUpperCase() === 'NO'){
        alert("Menu de la pizza no vegana");
        for(let i = 0;i < pizza_vegana.length;i++){
            alert(`- ${pizza_vegana[i]}`);
            
        }
        
    }
}

obtenrPizza();
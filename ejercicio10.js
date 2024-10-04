
let pizza_vegetariana = ['Pimiento', 'Tofu']
let pizza_vegana = ['Peperoni','Jamon','Salmon']
let ingrediente = ['Mozarela', 'Tomate']
let agregar_menu = []

function obtenrPizza() {
   let pizza = prompt("Decea una pizza vegetariana (SI) o (NO)").toUpperCase();//ingresa valor si o no y devuelve el valor en mayuscula
     while(pizza !== 'SI' && pizza !== 'NO'){//este while verifica si se ingresa un dato indiferente a si o no
        alert("dato incorrecto");
        pizza = prompt("Decea una pizza vegetariana (SI) o (NO)").toUpperCase();
     }

    if(pizza === 'SI'){//se ejecutara este codigo al elegir si

        let elegir = prompt(`elija algunos de estos ingredientes vegetarianos: (${pizza_vegetariana.join(", ")})`).toUpperCase();
        while(!pizza_vegetariana.map(ingrediente => ingrediente.toUpperCase()).includes(elegir))//este while verifica si ingresa un valor indiferente a la array
            {
                alert("dato incorrecto");
                elegir = prompt(`elija algunos de estos ingredientes vegetarianos: (${pizza_vegetariana.join(", ")})`).toUpperCase();
            }

        let indice = pizza_vegetariana.map(ingrediente => ingrediente.toUpperCase()).indexOf(elegir);//utiliza el metodo map para crear un arreglo y convertir el array en mayusculas 
        if(indice !== -1){
            let elementoSacado = pizza_vegetariana.splice(indice, 1)[0];
            agregar_menu.push(elementoSacado)
            alert(`su pizza es vegetariana y lleva estos ingredientes: ${elementoSacado } ${ ingrediente}`);
        }else if(indice !== -1){
            elementoSacado = pizza_vegetariana.splice(indice, 1)[1];
            agregar_menu.push(elementoSacado)
            alert(`su pizza es vegetariana y lleva estos ingredientes: ${elementoSacado } ${ ingrediente}`);
        }
        
    }else if(pizza.toUpperCase() === 'NO'){

        elegir = prompt(`elija elgunos de estos ingredientes veganos: (${pizza_vegana.join(", ")})`).toUpperCase();

        while(!pizza_vegana.map(ingrediente => ingrediente.toUpperCase()).includes(elegir))
            {
                alert("dato incorrecto");
                elegir = prompt(`elija algunos de estos ingredientes veganos: (${pizza_vegana.join(", ")})`).toUpperCase();
            }

        let indice = pizza_vegana.map(ingrediente => ingrediente.toUpperCase()).indexOf(elegir);

        if(indice !== -1){
            let elementoSacado = pizza_vegana.splice(indice, 1)[0];
            agregar_menu.push(elementoSacado)
            alert(`su pizza no es vegetariana y lleva estos ingredientes: ${elementoSacado } ${ ingrediente}`);
        }else if(indice !== -1){
            elementoSacado = pizza_vegana.splice(indice, 1)[1];
            agregar_menu.push(elementoSacado)
            alert(`su pizza no es vegetariana y lleva estos ingredientes: ${elementoSacado } ${ ingrediente}`);
        }else if(indice !== -1){
            elementoSacado = pizza_vegena.splice(indice, 1)[2];
            agregar_menu.push(elementoSacado)
            alert(`su pizza no es vegetariana y lleva estos ingredientes: ${elementoSacado } ${ ingrediente}`);
        }
        
    }
}

obtenrPizza();
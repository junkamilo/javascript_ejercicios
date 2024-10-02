/**
 * los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.
 */

//mujeres de la A a la L = grupo A
//hombres de la O a la Z = grupo B

    let nombreUsuario = prompt("Ingrese su nombre de usuario");
    let sexoUsuario = prompt("Ingrese su sexo");

    if(nombreUsuario.charAt(0).toUpperCase() < "M" && sexoUsuario.charAt(0).toUpperCase() === "F")
        {
           console.log("pertenece al grupo A");
           
        }else if(nombreUsuario.charAt(0).toUpperCase() > "N" && sexoUsuario.charAt(0).toUpperCase() === "M")
            {
                console.log("pertenece al grupo A");
                
            }else{
                console.log("pertenece al grupo B");
                
            }
        

        



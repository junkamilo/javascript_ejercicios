function verificar_contraseña(){
    let contraseña = prompt("Ingrese su contraseña: ");
    let verificar = prompt("Verifique su conttraseña: ");
    while(true){
        if(contraseña === verificar){
            alert("Contraseña correcta");
            break;
        }else{
            alert("Contraseña incorrecta, vuelva a intentar");
            verificar = prompt("Verifique su conttraseña: ");
        }
        
    }
}
verificar_contraseña();
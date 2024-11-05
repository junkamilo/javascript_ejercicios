let usuario_id = prompt("Digite contraseña");
let contraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,12}$/;
while(true){
    usuario_id = prompt("Digite contraseña");
    if(contraseña.test(usuario_id)){
        alert("Correcto");
        break;
    }else{
        alert("Incorrecto vuelva a intentar");
    }
}
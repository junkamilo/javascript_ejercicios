function eco() {
    while(true){
        let palabra = prompt("Ingrese una palabra y para terminar escriba (salir)");
        if (palabra === "salir") {
            break;
        }else{
            alert(palabra);
        }
    }
}
eco();
function membresias() {
    let total = 0;
    let cursos = 1;
    while(true){
        cursos = parseFloat(prompt("Ingrese cantidad de cursos comprados y para terminar Ingrese (0): "));
        if (cursos === 0) {
            break;
        } else {
            total += cursos;
        }
        alert(total);
    }
    if(cursos < 6){
        let total_pagar = total * 2000000;
        alert(`El precio a pagar es ${total_pagar}`)
    }else if(cursos > 6){
        let total_pagar = total * 1200000;
        alert(`El precio a pagar es ${total_pagar}`);
    }
    
}
membresias();
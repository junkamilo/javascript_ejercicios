let numero = parseFloat(prompt("Ingrese un número: "));

function numeroPrimo(num) {
            if (num <= 1) {
                alert(`El número ${num} ingresado no es primo.`);
                return;
            }
            if (num === 2) {
                alert(`El número ${num} ingresado es primo.`);
                return;
            }
            if (num % 2 === 0) {
                alert(`El número ${num} ingresado no es primo.`);
                return;
            }
            
            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) {
                    alert(`El número ${num} ingresado no es primo.`);
                    return;
                }
            }
            
            alert(`El número ${num} ingresado es primo.`);
        }

numeroPrimo(numero);
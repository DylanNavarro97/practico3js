const numero = parseInt(prompt("Ingrese un número"))

function parOImpar(numero) {
    if(!isNaN(numero)){
        if (numero % 2 === 0){
            document.write("El número es par")
        } else {
            document.write("El número es impar")
        }
    } else {
        alert("Ingrese un número válido")
    }
    
}

parOImpar(numero)
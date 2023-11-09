const numeroLimite = parseInt(prompt("Ingrese un número"))

const encontrarNumerosPrimos = (limite) => {
    if (!isNaN(limite)){
        const numerosPrimos = []
        for (let i = 2; i <= limite; i++){
            let contador = 0
            for (let j = 1; j <= i; j++){
                if (i % j === 0){
                    contador++
                }
            }
            if (contador === 2){
                numerosPrimos.push(i)
            }
        }
        document.write(`El array de numeros primos es [${numerosPrimos}]`)
    } else {
        alert("Ingresa un número válido")
    }
}

encontrarNumerosPrimos(numeroLimite)
const numero = parseInt(prompt("Escribí un número para multiplicar"))

const mostrarTabla = (numeroAMultiplicar) => {
    if (!isNaN(numeroAMultiplicar)){
        for (let i = 1; i < 11; i++){
            document.write(`${numeroAMultiplicar} x ${i} = ${numeroAMultiplicar * i}<br>`)
        }
    } else{
        alert("Ingresá un número válido")
    }
}

mostrarTabla(numero)
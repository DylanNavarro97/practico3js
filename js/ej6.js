const a = parseFloat(prompt("Ingrese el valor del lado del triángulo (m)"))
const b = parseFloat(prompt("Ingrese el valor de la base del triángulo (m)"))

function calcularPerimetro (ladoA,ladoB) {
    let perimetro = 0

    if (!isNaN(ladoA) && !isNaN(ladoB)){
        perimetro = 2 * (ladoA + ladoB)
        document.write(`El perimetro del triángulo es: ${perimetro}m2`)
    } else {
        alert("Ingrese datos válidos")
    }
}

calcularPerimetro(a,b)

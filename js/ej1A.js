const numerosIngresados = prompt("Ingresa los números separados por comas")
let arrayNumeros = []
if(numerosIngresados !== null && numerosIngresados !== ''){
    arrayNumeros = numerosIngresados.split(",")
}

const encontrarMayorValor = (array) => {
    let esTodoNumeros = true;

    for (let i = 0; i < array.length; i++){
        if (isNaN(array[i])){
            esTodoNumeros = false
        }
    }

    if (esTodoNumeros === true){
        if (array.length > 0){
            document.write(`Array: [${array}] <br>`)
            document.write(`El número más alto del array es: ${Math.max(...array)}`)
        } else{
            alert("No generaste correctamente el array")
        }
    } else {
        alert("Ingresa solo números dentro del array.")
    }

}

encontrarMayorValor(arrayNumeros)


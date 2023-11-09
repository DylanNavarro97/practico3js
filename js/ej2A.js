const numerosIngresados = prompt("Ingresa los números separados por comas")
let arrayNumeros = []
let arrayNumerosPares = []
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
           
        for(let i = 0; i < array.length; i++){
            if (array[i] % 2 === 0){
                arrayNumerosPares.push(array[i])
            }
        }

        document.write(`El nuevo array con solo números pares es [${arrayNumerosPares}]`)

        } else{
            alert("No generaste correctamente el array")
        }
    } else {
        alert("Ingresa solo números dentro del array.")
    }

}

encontrarMayorValor(arrayNumeros)
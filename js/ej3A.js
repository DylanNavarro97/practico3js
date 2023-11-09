const gradosCelcius = parseFloat(prompt("Ingrese los grados Celcius que quiere convertir a Farenheit"))

const convertirAFarenheit = (grados) => {
    if (!isNaN(grados)){
        const farenheit = (grados * 9/5) + 32
        document.write(`${gradosCelcius}°C es igual a ${farenheit}°F`)
    } else {
        alert("Ingresa solo números")
    }
}

convertirAFarenheit(gradosCelcius)
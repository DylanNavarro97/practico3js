//Sé que existe un metodo para hacer la verificacion de si existe o no las mayusculas/minusculas en un texto, con .test pero decidi hacerlo con arrays y for, para poner en practica lo visto.

const minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const mayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const texto = prompt("Ingresa el texto que queres analizar")

function verificarMayusMinus(cadena){
    if (cadena !== null && cadena !== ''){
        let contieneMinus = false
        let contieneMayus = false
        //Comparo letra a letra del texto ingresado con cada letra del abecedario tanto en minúscula como en mayúscula.
        for (let i = 0; i < minusculas.length; i++){
            for (let j = 0; j < cadena.length; j++){
                if (cadena[j] === minusculas[i]){
                    contieneMinus = true
                } 
                
                if (cadena[j] === mayusculas[i]){
                    contieneMayus = true
                }
            }
        }
    
        if (contieneMinus === true && contieneMayus === true){
            document.write("El texto que ingresaste contiene mayúsculas y minúsculas")
        } else if (contieneMinus === true && contieneMayus === false){
            document.write("El texto que ingresaste contiene solo minúsculas")
        } else {
            document.write("El texto que ingresaste contiene solo mayúsculas")
        }
    } else {
        alert("Ingresa un texto válido para analizar")
    }
}

verificarMayusMinus(texto)

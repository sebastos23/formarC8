/* Crear un archivo multiplicar.js que contenga una función llamada multiplicar, la cual
debe ser exportada al final del archivo. Esta función deberá recibir 2 parámetros y
retornar la multiplicación de los mismos. Importante:
a. Contemplar el escenario donde si alguno de los dos parámetros es cero, la
función retornará cero. */

function multiplicar (a, b){
    if (a == 0 || b == 0){
        return 0
    }else{
        return a * b
    }
}

module.exports = multiplicar

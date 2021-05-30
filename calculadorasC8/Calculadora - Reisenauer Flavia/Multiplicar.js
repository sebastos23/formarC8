/* Crear un archivo multiplicar.js que contenga una funcion llamada multiplicar, la cual debe ser exportada al final del archivo. Esta funcion debera recibir 2 parametros y retornar la multiplicacion de los mismos. Importante: contemplar el escenario donde si alguno de los dos parametros es cero, la funcion retornara cero. */

function multiplicar (n1, n2) {
    if(n1 === 0 || n2 === 0 ){
        return 0
    }
    return n1 * n2;
}

module.exports = multiplicar;
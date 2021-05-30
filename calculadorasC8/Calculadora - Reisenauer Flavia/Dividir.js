/* Crear un archivo dividir.js que contenga una funcion llamada dividir, la cual debe ser exportada al final del archivo. Esta funcion debera recibir 2 parametros y retornar la division de los mismos. Importante: contemplar el escenario donde si alguno de los dos parametros es cero, la funcion retornara "NO SE PUEDE DIVIDIR POR CERO". */

function dividir (n1, n2) {
    if(n1 === 0 || n2 === 0 ){
        return "No se puede dividir por cero"
    }
    return n1 / n2;
}

module.exports = dividir;
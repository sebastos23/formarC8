/*3. Crear un archivo multiplicar.js que contenga una función llamada multiplicar, la cual
debe ser exportada al final del archivo. Esta función deberá recibir 2 parámetros y
retornar la multiplicación de los mismos. Importante:
a. Contemplar el escenario donde si alguno de los dos parámetros es cero, la
función retornará cero.*/

let multiplicar = function(n1, n2) {
    return n1 * n2;
}



//console.log(multiplicar(4, 4));

module.exports = multiplicar;
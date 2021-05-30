/* La función 'multiplicar' recibe dos parámetros y devuelve
 la multiplicación de los mismos. En caso que alguno de los factores
sean 0 el resultado es 0. */
function multiplicar(numero1, numero2){
    if (numero1 == 0 || numero2 == 0){
        return 0;
    } else {
        return numero1 * numero2;
    }
}

module.exports = multiplicar;
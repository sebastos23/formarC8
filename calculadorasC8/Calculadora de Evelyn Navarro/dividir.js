/* La función 'dividir' recibe dos parámetros y devuelve
 la división de los mismos. En el caso que el divisor sea 0
 se devuelve un mensaje de error.*/
function dividir(numero1, numero2){
    if (numero2 == 0){
        return "No se puede dividir por cero";
    } else {
        return numero1 / numero2;
    }
}

module.exports = dividir;
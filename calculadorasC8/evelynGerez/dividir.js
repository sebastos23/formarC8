/*4. Crear un archivo dividir.js 
que contenga una función llamada dividir,
 la cual debe ser
exportada al final del archivo.
Esta función deberá recibir 2 parámetros y
 retornar la división de los mismos. 
 Importante: a. Contemplar el escenario donde si alguno de los dos parámetros es cero, la
función retornará "No se puede dividir por cero".*/

let dividir = function(n1, n2) {
    if (n1 == 0 || n2 == 0) {
        return "No se puede dividir por cero"
    } else {
        return n1 / n2;
    }
}

//console.log(dividir(0, 5));
module.exports = dividir;
const sumar = require ('./sumar')
const restar = require ('./restar')
const dividir = require ('./dividir')
const multiplicar = require ('./multiplicar')

console.log (sumar(2, 2))
console.log (restar(3, 2))
console.log (multiplicar(2, 2))
console.log (multiplicar(0, 2))
console.log (dividir(10, 2))
console.log (dividir(0, 2))

function calculadora (operacion ,a, b) {
    if (operacion == "sumar") {
        return sumar (a, b)
    } else if (operacion == "restar") {
        return restar (a, b)
    } else if (operacion == "multiplicar") {
        return multiplicar (a, b)
    } else if (operacion == "dividir") {
        return dividir (a, b)
    } else { 
        return "No es una operacion"

    }
}
 console.log (calculadora("sumar", 4, 5));
 console.log (calculadora("restar", 7, 5));
 console.log (calculadora("multiplicar", 4, 5));
 console.log (calculadora("multiplicar", 0, 5));
 console.log (calculadora("dividir", 7, 5));
 console.log (calculadora("dividir", 0, 5));
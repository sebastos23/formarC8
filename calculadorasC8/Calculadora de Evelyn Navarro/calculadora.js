/* Esta calculadora contiene 4 funciones básicas:
-Suma
-Resta
-Multiplicación
-División
*/

let suma = require('./sumar')
let resta = require('./restar')
let multiplicacion= require('./multiplicar') 
let division = require('./dividir')

console.log(suma(5, 5));
console.log(resta(6, 2));
console.log(multiplicacion(2, 0));
console.log(division(4, 0));
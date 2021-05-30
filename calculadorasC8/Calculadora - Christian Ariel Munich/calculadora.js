let sumar = require('./Calculadora/sumar');
let restar = require('./Calculadora/restar');
let multiplicar = require('./Calculadora/multiplicar');
let dividir = require('./Calculadora/dividir');

console.log(sumar(30, 20))
console.log(restar(30, 20))
console.log(multiplicar(5, 5))
console.log(multiplicar(5, 0))
console.log(multiplicar(0, 0))
console.log(multiplicar(0, 5))
console.log(dividir(5, 0))
console.log(dividir(0, 0))
console.log(dividir(0, 5))
console.log(dividir(15, 3))
console.log(dividir(155, 322)) // Les dejo los console.log que usé para probar así no tienen que andar escribiendo.
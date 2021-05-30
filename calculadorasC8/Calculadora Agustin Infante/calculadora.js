/* Crear un archivo calculadora.js en el cual deberemos requerir los cuatros archivos
hechos con anterioridad.
 */

let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

/* Ejecutar la función que permite sumar y la función que permite restar, pasando como
argumentos dos números cualesquiera. Mostrar en consola los resultados. */

console.log(sumar(10, 5)); // 10 + 5 Devuelve: 15
console.log(restar(10, 5)); // 10 - 5 Devuelve: 5

/* Ejecutar la función que permite multiplicar, pasando como argumentos dos números
cualesquiera. Mostrar en consola el resultado. 
 */

console.log(multiplicar(10, 5)); // 10 * 5 Devuelve: 50

/* Ejecutar la función que permite multiplicar, pasando ahora como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado. */

console.log(multiplicar(0, 5)); // 0 * 5 Devuelve: 0

/* Ejecutar la función que permite dividir, pasando como argumentos dos números
cualesquiera. Mostrar en consola el resultado. */

console.log(dividir(10, 5)); //10 / 5 Devuelve: 2

/* Ejecutar la función que permite dividir, pasando ahora como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado. */

console.log(dividir(10, 0)); //10 / 0 Devuelve: "No se puede dividir por cero"








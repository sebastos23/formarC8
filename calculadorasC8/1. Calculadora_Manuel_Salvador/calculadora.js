const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

/* Ejecutar la función que permite sumar y la función que permite restar, 
pasando como argumentos dos números cualesquiera. Mostrar en consola los resultados. */
console.log(sumar(3, 7))
console.log(restar(6, 3))

/* Ejecutar la función que permite multiplicar, pasando como argumentos dos números
cualesquiera. Mostrar en consola el resultado. */
console.log(multiplicar(5, 3))

/* Ejecutar la función que permite multiplicar, pasando ahora como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado. */
console.log(multiplicar(0, 8))

/* Ejecutar la función que permite dividir, pasando como argumentos dos números
cualesquiera. Mostrar en consola el resultado. */
console.log(dividir(12, 3))

/* Ejecutar la función que permite dividir, pasando ahora como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado. */
console.log(dividir(6, 0))
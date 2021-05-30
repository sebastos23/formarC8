/*1. Crear un archivo calculadora.js en el cual deberemos requerir los cuatros archivos
hechos con anterioridad.
*/
let dividir = require("./dividir");
let multiplicar = require("./multiplicar");
let restar = require("./restar");
let sumar = require("./sumar");
/*2. Ejecutar la función que permite sumar y la función que permite restar, pasando como
argumentos dos números cualesquiera. Mostrar en consola los resultados.*/
console.log(sumar(2, 5));
console.log(restar(100, 5));
/*3. Ejecutar la función que permite multiplicar, pasando como argumentos dos números cualesquiera. Mostrar en consola el resultado.*/
console.log(multiplicar(5, 5));
/*4. Ejecutar la función que permite multiplicar, pasando ahora como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado.*/
console.log(multiplicar(2, 0));
/*5. Ejecutar la función que permite dividir, pasando como argumentos dos números
cualesquiera. Mostrar en consola el resultado.*/
console.log(dividir(10, 2));
/*6. Ejecutar la función que permite dividir, pasando ahora como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado.*/
console.log(dividir(5, 0));
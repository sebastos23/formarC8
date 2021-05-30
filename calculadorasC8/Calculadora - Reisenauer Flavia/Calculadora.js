/* Crear un archivo calculadora.js en el cual deberemos requerir los cuatros archivos hechos con anterioridad */

const sumar = require('./Sumar');
console.log(sumar (27,53));

const restar = require('./Restar');
console.log(restar (42,23));

const multiplicar = require('./Multiplicar');
console.log(multiplicar (5,5));
console.log(multiplicar (8,0));

const dividir = require('./Dividir');
console.log(dividir (10,5));
console.log(dividir (14,0));
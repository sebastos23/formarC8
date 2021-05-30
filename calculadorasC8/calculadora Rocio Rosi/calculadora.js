let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

console.log( 'Resultado de la suma: ' + sumar(4, 12) );
console.log( 'Resultado de la resta: ' + restar(16, 8) );
console.log( 'Resultado de la multiplicacion: ' + multiplicar(3, 4) );
console.log( 'Resultado de la division: ' + dividir(4, 0) );


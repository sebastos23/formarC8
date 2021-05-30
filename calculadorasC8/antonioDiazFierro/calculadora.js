let suma = require('./sumar');
let divida = require('./dividir');
let resta = require('./restar');
let multiplica = require('./multiplicar');
let num1 = 8;
let num2 = 5;
const CERO = 0;

function puntoDos (num1, num2){
    console.log('El resultado de la suma es ',  suma(num1,num2));
    console.log('El resultado de la resta es ', resta(num1,num2));}
puntoDos(num1,num2);
console.log ('El resultado de la multiplicacion es ', multiplica(num1,num2));
console.log('El resultado de la divicion es ', divida(num1,num2));
console.log(divida(num1,CERO));

/* ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación
matemática, hubiésemos programado todo en un mismo archivo?

el algoritmo funcionaria igual, pero las operacione (funciones) no podrian utilizarse
en otro archivo */

/* ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?

Porque evita la repeticion de codigo*/

/* ¿Será esta metodología de trabajo una constante de aquí en adelante?

Definitivamente*/

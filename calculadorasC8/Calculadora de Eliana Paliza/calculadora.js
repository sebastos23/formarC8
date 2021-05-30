let sumar = require("./sumar");
let restar = require ("./restar");
let multiplicar = require ("./multiplicar");
let dividir = require ("./dividir");
let process = require("process");


console.log(sumar (2,2))|
console.log(restar(3,2))
console.log(multiplicar(2,2))
console.log(multiplicar(0,2))
console.log(dividir(10,2))
console.log(dividir(2,0))





let operacion = process.argv[2]; // operacion por consola
let numero1 = Number (process.argv[3]); // primer numero por consola
let numero2= Number (process.argv[4]); // segundo numero por consola

if (operacion=="sumar") {
 console.log("El resultado de la suma es: " + sumar(numero1, numero2))
}
if (operacion=="restar") {
    console.log("El resultado de la resta es: " + restar(numero1, numero2))
}
if (operacion=="multiplicar") {
    console.log("El resultado de la multiplicacion es: " + multiplicar(numero1, numero2))
}
if (operacion=="dividir") {
        console.log("El resultado de la division es: " + dividir(numero1, numero2))
}
   
       
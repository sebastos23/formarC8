const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require ('./multiplicar');
const dividir = require('./dividir');

const process = require('process');
let operacion = process.argv[2];
let numero1 = Number(process.argv[3]);
let numero2 = Number(process.argv[4]);

if (operacion == "sumar") {
    console.log("El resultado de la suma es:" + sumar(numero1, numero2));

}
else if (operacion =="restar") {
    console.log("El resultado de la resta es: " + restar(numero1, numero2));
} 
else if (operacion =="dividir") {
    console.log("El resultado de la division: " + dividir(numero1, numero2));
}
else if (operacion == "multiplicar") {
    console.log("El resultado de la multiplicacion es: " + multiplicar(numero1, numero2));
} else {
    console.log("Operacion incorrecta");
}
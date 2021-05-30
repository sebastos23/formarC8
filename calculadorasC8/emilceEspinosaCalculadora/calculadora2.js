const sumar = require ('./sumar');
const restar = require ('./restar');
const dividir = require ('./dividir');
const multiplicar = require ('./multiplicar');
const process = require('process');

let operacion = process.argv[2]; //operacion por consola
let numero1 = Number(process.argv[3]); //primer numero
let numero2 = Number(process.argv[4]);// segundo  numero

//["node", "calculadora.js", "algo", "otro"]
//  0   ,       1          ,     2 ,   3
//console.log(operacion);

if (operacion.toLowerCase() == "sumar"){
    console.log("el resultado:" + sumar(numero1 , numero2))
}
if (operacion.toLowerCase() == "restar"){
    console.log("el resultado:" + restar(numero1 , numero2))
}
if (operacion.toLowerCase() == "multiplicar"){
    console.log("el resultado:" + multiplicar(numero1 , numero2))
}
if (operacion.toLowerCase() == "dividir"){
    console.log("el resultado:" + dividir(numero1 , numero2))
}
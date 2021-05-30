let sumar = require("./sumar")
console.log(sumar(20,14))

let multiplicar = require("./multiplicar")
 console.log(multiplicar(45, 45))

let dividir = require("./dividir")
console.log(dividir(38, 85023))

let restar = require("./restar")
 console.log(restar(23, 33))

 function calculadora (operacion, a, b){
      if(operacion == "sumar"){
          return sumar (a, b)
      }
 }
// Para saber la ubicacion de los archivos
/*  console.log(process.argv) */

const process = require('process');
let operacion = process.argv[2].toLowerCase(); // operacion por consola

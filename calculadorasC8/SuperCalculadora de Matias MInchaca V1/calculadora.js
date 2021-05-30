let sumar = require("./sumar")
let restar = require("./restar")
let multiplicar = require("./multiplicar")
let dividir = require("./dividir")


console.log(sumar(1, 2))
console.log(restar(46, 2))
console.log(multiplicar(23, 23))
console.log(multiplicar(23, 0))
console.log(dividir(32, 2))
console.log(dividir(0, 2))



/* function calculadora(a, operacion, b){
      if (operacion == sumar){
          return sumar(a, b)
      }else if(operacion == restar) {
          return restar(a, b)
      }else if(operacion == multiplicar){
          return multiplicar(a, b)
      }else if(operacion == dividir){
          return dividir(a,b)
      }else{
          return "Seleccione una operación válida"
      }
  }
  console.log(calculadora(23, sumar, 3)) */


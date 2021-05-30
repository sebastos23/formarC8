let sumar = require ('./sumar');
let restar = require ('./restar');
let dividir = require ('./dividir');
let multiplicar = require ('./multiplicar');

console.log(sumar(2, 2))
console.log(restar(3, 2))
console.log(multiplicar(2, 2))
console.log(multiplicar(0, 2))
console.log(dividir(10, 2))
console.log(dividir(2, 0))


//visto en clase
/* const sumar= require('./modulos/sumar) 
   const restarr= require('./modulos/restar)
   const dividir= require('./modulos/dividir)
   const multiplicar= require('./modulos/multiplicar)
*/

/* function calculadora (operacion, a, b){
    if (operacion == "sumar"){
        return sumar(a, b)
    }else if(operacion == "restar"){
        return restar (a, b)
    } else if(operacion == "multiplicar"){
        return multiplicar(a, b)
    } else if (operacion == "dividir"){
        return dividir (a, b)
    } else {
        return "no es una operacion valida"
    }
}*/

//revisar
/*
console.log("sumar"(2, 2))
console.log("restar"(3, 2))
console.log("multiplicar"(2, 2))
console.log("multiplicar"(0, 2))
console.log("dividir"(10, 2))
console.log("dividir"(2, 0))*/
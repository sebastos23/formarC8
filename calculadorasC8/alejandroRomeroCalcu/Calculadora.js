//ALEJANDRO ROBERTO ROMERO
//COMISION 8 (NOCHE)

const sumar = require ('./sumar');
const restar = require('./restar.js');
const dividir = require('./dividir.js')
const multiplicar = require('./multiplicar.js')

function calculadora (operacion,a,b){
    if(operacion == "sumar"){
        return  console.log("La suma de "+ a + " y "+ b +" es "+ sumar(a,b));
    }else if(operacion == "restar"){
        return console.log("La resta de "+ a + " y "+ b +" es "+restar(a,b));
    }else if(operacion == "multiplicar"){
        return console.log("La multiplicacion de "+ a + " y "+ b +" es "+ multiplicar(a,b));
    }else if(operacion == "dividir"){
        return console.log("La division de "+ a + " y "+ b +" es "+dividir (a,b));
    }else{
        return console.log("no es una operacion valida")
    }
}

let operacion = process.argv[2]
let a = process.argv[3]
let b = process.argv[4]

calculadora(operacion,a,b)

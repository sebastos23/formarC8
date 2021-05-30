const sumar = require("./sumar");
const restar = require("./restar");
const dividir = require("./dividir");
const multiplicar = require("./multiplicar");
const process = require("process");
let operacion = process.argv[2].toLowerCase()
let numero= Number(process.argv[3])
let numero2= Number (process.argv[4])
if(operacion == "sumar"){
    console.log("el resultado es:" + sumar( numero, numero2))
}
if(operacion=="restar"){
    console.log("el resultado es:" + restar( numero, numero2))
}
if(operacion=="multiplicar"){
    console.log("el resultado es:" + multiplicar( numero, numero2))
}
if(operacion=="dividir"){
    console.log("el resultado es:" + dividir(numero, numero2))
}


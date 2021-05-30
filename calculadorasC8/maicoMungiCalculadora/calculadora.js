const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');
const process = require ('process');

let operacion = process.argv[2].toLowerCase();
let numero1 = number(process.argv[3]);
let numero1 = number(process.argv[4]);

if(operacion == "sumar"){
    console.log("el resultado de la suma es: " +sumar(numero1, numero2));
    }
    
    if(operacion == "restar"){
    console.log("el resultado de la resta es: " + restar(numero1, numero2));
    }
    
    if(operacion == "multiplicar"){
    console.log("el resultado de la multiplicacion es: " +multiplicar(numero1, numero2));
    }
    
    if(operacion == "dividir"){
    console.log("el resultado de la division es: " +dividir(numero1, numero2));
    }
    
    
    



/*// primera prueba con error//
function calculadora (operacion, a,b){
    if(operacion == "sumar"){
        return sumar(a,b)
    }else if(operacion == "restar"){
        return restar(a,b)
    }else if(operacion == "multiplicar"){
        return multiplicar(a,b)
    }else if(operacion == "dividir"){
        return dividir(a,b) 
    }else{
        return "no es una operacion valida";
    }
}
console.log(calculadora("sumar",4,5));
console.log(calculadora("restar",7,5));
console.log(calculadora("multiplicar",4,5));
console.log(calculadora("multiplicar",0,5));
console.log(calculadora("dividir",7,5));
console.log(calculadora("dividir",0,5));
*/
const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

function calculadora (operaciones, a, b){
    if(operaciones =="sumar"){
        return sumar (a, b);
    }else if(operaciones == "restar"){
        return restar (a, b);
    }else if(operaciones == "multiplicar"){
        return multiplicar (a, b);
    }else if(operaciones == "dividir"){
        return dividir (a, b); 
    }else{
       return "No es una operacion valida"
    }
}
console.log(calculadora("sumar", 2, 2));
console.log(calculadora("restar",4, 2));
console.log(calculadora("multiplicar", 5, 3));
console.log(calculadora("multiplicar", 0, 3));
console.log(calculadora("dividir", 12, 3));
console.log(calculadora("dividir", 0, 5));
console.log(calculadora("difkfjj", 0, 5));
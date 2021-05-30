let Sumar= require ('./Sumar');
let Restar= require ('./Restar');
let Multiplicar= require ('./Multiplicar');
let Dividir= require ('./Dividir');
let process= require('process')

function Calculadora(operacion, numero1, numero2){
    if(operacion.toLowerCase()=="sumar"){
        return Sumar(numero1, numero2)
    }else if(operacion.toLowerCase()=="restar"){
        return Restar(numero1, numero2)
    }else if (operacion.toLowerCase()=="multiplicar"){
        return Multiplicar(numero1, numero2)
    }else if (operacion.toLowerCase()=="dividir"){
        return Dividir(numero1, numero2)
    }else{
        return "No es una operacion valida"
    }
}

console.log(Calculadora("sumar",5,5));   
console.log(Calculadora("restar",5,6));   
console.log(Calculadora("Multiplicar",5,5));   
console.log(Calculadora("Multiplicar",0,5));   
console.log(Calculadora("Dividir",25,5));   
console.log(Calculadora("Dividir",25,0));   


/* 
let operacion= process.argv[2];
let numero1=process.argv[3];
let numero2=process.argv[4];

if (operacion.toLowerCase() =="sumar"){
    console.log("El resultado de la suma es: "+Calculadora(operacion, numero1, numero2) )
}
if (operacion.toLowerCase() =="restar"){
    console.log("El resultado de la resta es: "+Calculadora(operacion, numero1, numero2) )
}
if (operacion.toLowerCase() =="multiplicar"){
    console.log("El resultado de la multiplicación es: "+MulCalculadoratiplicar(operacion, numero1, numero2) )
}
if (operacion.toLowerCase() =="dividir"){
    console.log("El resultado de la división es: "+Calculadora(operacion, numero1, numero2) )
}
if (operacion.toLowerCase()!= "sumar"&&operacion.toLowerCase()!= "restar"&&operacion.toLowerCase()!= "multiplicar"&&operacion.toLowerCase()!= "dividir"){
    console.log("No es una operación valida");
} */



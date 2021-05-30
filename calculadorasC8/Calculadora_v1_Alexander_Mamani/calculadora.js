//Funciones

let sumar = require("./sumar");
let restar = require("./restar");
let dividir = require("./dividir");
let multiplicar = require("./multiplicar");

let numero1;
let numero2;

//#1 Prueba de las funciones 
//#2 Suma y Resta
numero1 = 5;
numero2 = 4;
console.log("La suma de",numero1,"+",numero2,"es :",sumar(numero1,numero2));
console.log("La resta de",numero1,"-",numero2,"es :",restar(numero1,numero2));

//#3 Multiplicacion
console.log("La multiplicacion de",numero1,"*",numero2,"es :",multiplicar(numero1,numero2));

//#4 Multiplicacion por 0
numero1 = 2;
numero2 = 0;
console.log("La multiplicacion de",numero1,"*",numero2,"es :",multiplicar(numero1,numero2));

//#5 Division
numero1 = 8;
numero2 = 2;
console.log("La division de",numero1,"/",numero2,"es :",dividir(numero1,numero2));

//#6 Division por 0
numero1 = 8;
numero2 = 0;
console.log("La division de",numero1,"/",numero2,"es :",dividir(numero1,numero2));


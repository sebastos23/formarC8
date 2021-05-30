let sumar = require ("./sumar");
let restar = require ("./restar");
let multiplicar = require ("./multiplicar");
let dividir = require ("./dividir");

// Leer desde la Pantalla
const process = require ("process");
let num1 = process.argv[2];
let operacion = process.argv[3];
let num2 = process.argv[4];

function calcu (operacion, num1, num2) {
    if (operacion == "-") {
        return restar(num1, num2);
    } else {
        if (operacion == "+") {
            return sumar(num1, num2);
        } else {
            if (operacion == "/") {
                return dividir(num1, num2);
            } else {
                if (operacion == "*") {
                    return multiplicar(num1, num2);
                } else {
                    return "Operación no valida";
                }
            }
        }
    }
}
console.log (num1+" "+operacion+" "+num2+" = "+calcu (operacion, num1, num2));
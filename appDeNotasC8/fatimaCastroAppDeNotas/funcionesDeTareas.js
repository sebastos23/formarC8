
const fs = require('fs');
const appDeNotas = fs.readFileSync('./tareas.json', 'utf-8');


let appParse = JSON.parse(appDeNotas);


let process = require('process');
let accion = process.argv[2]

switch (accion) {
    case "listar":
        console.log(appParse);
        break;  
    case undefined:
        console.log("Atención - tienes que pasar una acción");    
        break;
    default:
        console.log("No entiendo que quieres hacer");
        break;
}

module.exports = appParse;
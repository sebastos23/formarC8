const fs = require('fs');
const process = require('process')
module.exports = tareas = JSON.parse(fs.readFileSync('./listaDeTareas/tareas.json', 'utf-8'))

let listar = process.argv[2];

switch(listar){
    case "listar":
        console.log(tareas)
        break;
    case undefined:
        console.log("Atencion - Tienes que pasar una accion")
        break;
    default:
        console.log("No entiendo que quieres hacer")
        break;
        } 
    

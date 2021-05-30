let modulosTareas = require('./funcionesDeTareas');

let process = require('process');
let notas = process.argv[2];

modulosTareas.leerJSON

switch (notas) {
    case "listar" : 
    let tareas = moduloTareas.leerJSON();
        console.log(tareas)
    break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción")
    break;
    default :
    console.log ("no entiendo que quieres hacer")
     break;
}

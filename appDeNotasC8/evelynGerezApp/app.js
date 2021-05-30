let funcionesDeTareas = require("./funcionesDeTareas");
const process = require('process');
let list = process.argv[2] ? process.argv[2].toLocaleLowerCase() : undefined;
//console.log(arrayJSON);
switch (list) {
    case "listar":
        console.log(funcionesDeTareas);
        break;
    case undefined:
        console.log("Atención- Tienes que pasar una acción");
        break;
    default:
        console.log("No entiendo qué quieres hacer.");
        break;

}
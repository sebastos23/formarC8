const fs = require('fs');
const arrayJSON = fs.readFileSync('./tareas.json', 'utf-8');
let arrayTareas = JSON.parse(arrayJSON);
const process = require('process');
const leerTerminal = process.argv;

function funcionesDeTareas(){
    switch (leerTerminal[2]) {
        case 'listar':
            console.log(arrayTareas);
            break;
        case undefined:
            console.log('Atención - Tienes que pasar una acción.');
            break;
        default:
            console.log('No entiendo qué quieres hacer.');
    }
}

module.exports = funcionesDeTareas;
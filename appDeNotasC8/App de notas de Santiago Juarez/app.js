let fs = require('fs');
let arrayJSON = fs.readFileSync('./tareas.json', 'utf-8');
let process = require('process')

let arrayJS = JSON.parse(arrayJSON);

function app(accion) {
    accion = process.argv[2] 
    switch (accion) {
        case 'listar':
            console.log(arrayJS);
            break
        case undefined:
            console.log('Atención - Tienes que pasar una acción');
            break
        default:
            console.log('No entiendo qué quieres hacer');
    }
}

module.exports = app;
const tareasjson = require('./funcionesDeTareas');
const process = require('process');


const accion = process.argv[2];

switch (accion) {
    case 'listar':
        console.log(tareasjson);
        break;
    case undefined :
        console.log('Atención - Tenes que pasar una acción');
        break

    default: console.log('No entiendo qué queres hacer');
        break;
}
let fs = require('fs');
let tareasJSON = fs.readFileSync('./tareas.json', 'utf-8');
let tareasJSONArray = JSON.parse(tareasJSON);

const process = require('process');

let appDeTareas = process.argv[2]; //

function appMasFuncional(appDeTareas) {
    switch(appDeTareas) {
        case 'listar':
            console.log(tareasJSONArray);
            break;
        case undefined:
            console.log('Atención - tienes que pasar una acción');
            break;
        default:
            console.log('No entiendo que quieres hacer');
    }
}
module.exports = appMasFuncional(appDeTareas);
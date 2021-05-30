const fs = require('fs');

let arrayJson = [
{titulo : 'tarea', estado : 'terminada'}, 
{titulo : 'tarea', estado : 'en progreso'}, 
{tituolo : 'tarea', estado : 'pendiente'}
]

let listar = arrayJson

arrayJson : JSON.parse((fs.readFileSync('./tareas.json', 'utf-8')));

const process = require('process');
const comando = process.argv[2];
const palabra = require('./tareas.json')

switch (comando){
    case "listar":
        console.log(listar);
        break;
    case undefined :
        console.log("Atención - tienes que pasar una acción");
        break;
    default :
    console.log("No entiendo que quieres hacer");
    break;
}

module.exports = ('./app', 'utf-8');



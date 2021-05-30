const fs = require('fs');
let tareas = fs.readFileSync('./tareas.json', 'utf-8');
var tareasOriginal = JSON.parse(tareas);
const process = require('process');
let operacion = process.argv[2];
const funcion = require('./listar');

funcion(operacion, tareasOriginal);
const fs = require('fs');
const appDeNotas = fs.readFileSync('./tareas.json', 'utf-8');

const notas = require('./funcionesDeTareas')
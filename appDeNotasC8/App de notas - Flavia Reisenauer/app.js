let moduloTareas = require('./funcionesDeTareas.js');
let process = require('process');
let opciones = process.argv[2];
    
switch (opciones) {
    case "listar" :
        let tareas = moduloTareas.leerJSON();
        for(let i = 0; i < tareas.length; i++) {
               console.log(tareas[i].titulo)
               console.log(tareas[i].estado)
            }
                break;
    case undefined :
        console.log("Atención - Tienes que pasar una accion")
        break;
    default : 
        console.log("No entiendo qué quieres hacer")
} 
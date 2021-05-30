
let process = require('process');
let moduloTareas = require('./funcionesDeTareas')
  
let terminal = process.argv[2]
switch(terminal){
    case "listar":
       let archivoJSON = moduloTareas.leerJSON();
            console.log("--LISTA DE TAREAS--")
         for(let i = 0; i < archivoJSON.length; i++){
            console.log("* " + "Título: " + archivoJSON[i].titulo + "...." + "Estado: " +  archivoJSON[i].estado);
         }
        break;
    case undefined :
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default :
    console.log('No entiendo qué quieres hacer.');          
}



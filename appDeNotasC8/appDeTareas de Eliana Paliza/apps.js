let moduloTareas = require('./tareas.js');

let process=require('process');

let aplicacion = process.argv[2];



switch(aplicacion) {
    case "listar":
           let tareas = moduloTareas.tareas();
               if(tareas.length === 0){
                   console.log("Tu lista de tareas está vacía")
               } else {
                   for(let i = 0; i< tareas.length; i++){
                       console.log("titulo: " + tareas[i].titulo + " - estado: " + tareas[i].estado)
                   }
               }
               
           break;

    case undefined:
           console.log("Atencion - Tienes que pasar una accion");

        break;
    
    default:
           console.log("No entiendo que quieres hacer");
}








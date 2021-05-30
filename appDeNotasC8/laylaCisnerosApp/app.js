let lectura1 = require('./funcionesDeTareas.js');

let process = require('process');

let accion = process.argv[2];

if (accion === undefined) { 
    return console.log("Atención - Tienes que pasar una acción")
}

switch(accion.toLowerCase()){
    case "listar":
        let tareas = lectura1.parsear();
        if (tareas.length === 0){
            console.log("Tu lista está vacía")
        }else{
            for(let i = 0; i < tareas.length; i++){
                console.log("Título: " + tareas[i].titulo + " - estado: " + tareas[i].estado)
            }
        }
        break;
    default:
        console.log("No entiendo que quieres hacer")
} 

 
let moduloTareas = require('./tareas');
let process = require('process');
let comando = process.argv[2];

switch (comando) {
        case "listar" :
        let tareas = moduloTareas.leerJSON();
        if (tareas.length === 0){
            console.log("Tu lista de tareas esta vacia")
        }else{
            for(let i = 0; i < tareas.length; i++){
                console.log("Título: " + tareas[i].titulo + " - estado: " + tareas[i].estado);
        }
    }
        break;
        case undefined:
            console.log("pasar un mensaje")
            break;  
        default:
            console.log(("No entiendo lo que quiere escribir"));
    }
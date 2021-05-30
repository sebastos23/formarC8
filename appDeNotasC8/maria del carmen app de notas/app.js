let moduloTareas = require('./tareas');
let process = require('process');
let comando = process.argv[2];

switch (comando) {
    case "listar":
        let tareas = moduloTareas.leerjson();
        if(tareas.length === 0){
                 console.log("Tu lista de tareas esta vacia")
        }else{
            for(let i = 0; i < tareas.length; i++){
                console.log("Titulo:"+ tareas[i].titulo + " - estado:" + tareas[i].estado)
             
               
            }
        }
        break;
    case undefined :
        console.log("Atencion tiene  que pasar una accion");  
        break;
    default:
        console.log("no entiendo lo que quieres hacer");
}
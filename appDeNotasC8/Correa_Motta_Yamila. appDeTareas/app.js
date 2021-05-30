let moduloTareas = require('./tareas');
let process = require('process');
let comando = process.argv[2];

switch (comando){
    case "listar" :
let tareas = moduloTareas.leerJson()
   if (tareas.length === 0){
       console.log("tu lista de tareas esta vacio");
   } else{
       for(let i = 0; i < tareas.length ; i++){
        console.log("Titulo: " + tareas[i].titulo + "- estado: " + tareas[i].estado);
      }
   }
break;
    case undefined :
        console.log("atencion! tienes que pasar una accion");
        break;
    default :    
    console.log("no entiendo lo que quieres hacer");
    //no hace falta el break por que no continua el codigo
}


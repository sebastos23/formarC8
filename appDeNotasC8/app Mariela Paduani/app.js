let listaDeTareas = require('./funcionesDeTareas');

let process = require('process');

let notas = process.argv[2]

switch (notas){
    case "listar":
        let tareas = listaDeTareas.leerJSON();
        if(tareas.length === 0){
          console.log("No hay nada");
       }else{
  for(let i = 0; i < tareas.length; i++){
    console.log(tareas[i].titulo + " - " + tareas[i].estado);
  }
}
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;
    default:
        console.log("No entiendo qué quieres hacer");
        break;
}




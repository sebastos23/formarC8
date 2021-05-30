let arrayParseado = require('./funcionesDeTareas');
let process = require('process');
let index = process.argv[2];

switch (index){
 case "listar":
    let tareas= arrayParseado;
    if (tareas.length ===0 ){
      console.log("Bienvenido a la App. de Tareas de Martin Salgado");
     console.log("No Hay Tareas Para mostrar");
    }else{
      console.log(">>>Bienvenido a la App. de Tareas de Martin Salgado<<<");
      for(let i=0; i < tareas.length ; i++)
      {
        console.log("Título: " + tareas[i].Titulo + " - estado: " + tareas[i].Estado);
      }
    }
    break;
    case undefined: 
    console.log(">>>Bienvenido a la App. de Tareas de Martin Salgado<<<")
    console.log("Atencion - Tienes que pasar una Acción");
    console.log("***Luego de escribir app.js ingresa la Palabra 'listar' para visualizar Tareas***");
    break;
    default:
      console.log("No entiendo lo que quieres hacer");
}
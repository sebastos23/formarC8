let fs = require("fs")

let tareas= fs.readFileSync('./tareas.json','utf-8');
let tareasParseado = JSON.parse(tareas)
let process = require('process');
let listar = process.argv[2]

function tarea() {
    if ( listar !== undefined){
       switch(listar.toLowerCase()){
           case "listar":
                      console.log(tareasParseado)
               break;
           default:
           console.log("No entiendo qué quieres hacer")
       break;    
       }
           } else{
       console.log ("Atencion -Tienes que pasar una acción")}   
   } 
   

module.exports = tarea
let fs = require('fs');
let arrayJSON = fs.readFileSync('./tareas.json', 'utf-8')
let tareaParseado = JSON.parse(arrayJSON)

const process = require('process');
let listar = process.argv[2];
//console.log(listar);

function tareas() {
 if ( listar !== undefined){
    switch(listar.toLowerCase()){
        case "listar":
                   console.log(tareaParseado)
            break;
        default:
        console.log("No entiendo qué quieres hacer")
    break;    
    }
        } else{
    console.log ("Atencion -Tienes que pasar una acción")}   
}

module.exports = tareas
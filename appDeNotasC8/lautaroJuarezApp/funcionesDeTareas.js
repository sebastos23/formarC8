let fs = require('fs');
let arrayJSON = fs.readFileSync('./tareas.json', 'utf-8')
let arrayParse=JSON.parse(arrayJSON);
let process = require("process");
let listado=process.argv[2]
switch (listado){
    case "listar":
        console.log(arrayParse)
        break;
    
        case undefined:
            console.log("Atención, tienes que pasar una acción")
            break;
            default:
            console.log("No entiendo que quieres hacer")
}

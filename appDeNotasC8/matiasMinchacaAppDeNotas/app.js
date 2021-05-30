
let funcionesDeTareas = require("./funcionesDeTareas")
let process = require("process");
let listado = process.argv[2];

function queHacer(){ 
    switch (listado){
    case undefined:
    return ("Atención - Tienes que pasar una acción.")
    break;
    case "Listar":
    return funcionesDeTareas
    break;
    default:
    return ("No entiendo qué quieres hacer.")
}
}
console.log(queHacer())




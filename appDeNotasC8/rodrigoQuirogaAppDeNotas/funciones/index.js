let listado= function(){
let process = require ("process");
let comando = process.argv[2];
let fs = require ('fs');
let tareasJson = fs.readFileSync('./tareas.json', 'utf-8');
let tareasparseado = JSON.parse(tareasJson); //Json pasado a js
switch (comando) {
    case "listar":
        console.log(tareasparseado);     
         break;
    case undefined:
        console.log("Atencion: Tienes que pasar una accion");    
        break;
    default:
           console.log("No entiendo que quieres decir ");
        break;
}
}
module.exports=listado




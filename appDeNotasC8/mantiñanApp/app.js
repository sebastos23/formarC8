let listado = require("./FuncionesdeTareas");

const process = require ("process");
let opcion = process.argv[2];

function opciones(opcion) {
    switch (opcion) {
        case "listar":
            return listado();
            break;
        case undefined:
            return "Atención - Tienes que pasar una acción.";
            break;
        default:
            return "No entiendo qué quieres hacer​.";
            break;
    }
}

console.log(opciones(opcion));
let moduloTareas = require('./tareas');
let process = require('process');
const { argv } = require('process');
let comando = process.argv[2]

switch( comando ){
    case 'listar':
        let tareas = moduloTareas.leerJSON()

        if(tareas === 0){
            console.log('******************************');
            console.log('No tienes tareas en la lista');
            console.log('*******************************');
            console.log('Puedes agregar una tarea ingresando "Agregar"');
        }else{
            for(let i = 0; i < tareas.length; i++){
                console.log('---------------------' + [i] )
                console.log('Tarea: ' + tareas[i].titulo )
                console.log('Estado: ' + tareas[i].estado )
            }
            
            console.log('*************************************');
            console.log('Puedes agregar una tarea nueva ingresando "Agregar" y a continuación la tarea y el estado');
            console.log('*************************************');
        }
        break;
    case undefined:
        console.log('Atención - debes ingresar una acción');
        break;

    case 'agregar':
        let titulo = process.argv[3];
        let estado = process.argv[4];

        if(titulo !== undefined && estado !== undefined){
            moduloTareas.escribirJSON(titulo, estado)
            console.log("***************************");
            console.log("La tarea ha sido agregada")
            console.log("***************************");
        }else{
            console.log("Debes ingresar una tarea y su estado")
        }

        break;
    case "deshacer":
        moduloTareas.deshacer()
        break;
    default:
        console.log('No entiendo que quieres hacer');
        break;
}


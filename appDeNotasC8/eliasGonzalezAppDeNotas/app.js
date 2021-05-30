let moduloTareas = require ('./FuncionesDetareas');
let process = require ('process');
let accion = process.argv [2];

moduloTareas.leerJSON

     switch (accion){
        case "listar":
          let tareas = moduloTareas.leerJSON();
          if( tareas.length === 0){
            console.log('tu lista esta vacia');
          }else{
            for (let i=0 ; i < tareas.length ; i++){
              console.log(tareas[i].titulo);
              console.log(tareas[i].estado)
            } 
          }

           break;
           case undefined :
            console.log('Atencion tienes que pasar una accion');
            break;
            default :
            console.log('No entiendo lo que quieres hacer');
}

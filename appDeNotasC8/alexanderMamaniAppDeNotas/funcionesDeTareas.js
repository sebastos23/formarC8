//Funciones de la App de Tareas

let fs = require('fs');

//leo el archivo JSON
let tareas = fs.readFileSync('./tareas.json', 'utf-8');

//paso a array el archivo JSON
let tareasParseadas = JSON.parse(tareas);

/*
-limpia caracteres de un array convertido a string
-opcion 1 limpia y hace salto de linea
-opcion 2 solo limpia
*/
function limpiarString(string, linea)
{
    for(let i = 0; i < string.length; i++)
    {
        if(linea === 1)
        {
            string = string.replace("[{", "\n");
            string = string.replace('"', " ");
            string = string.replace("{", "");
            string = string.replace(",", "\n");
            string = string.replace("}", "\n");
            string = string.replace("}]", "\n");
        }
        else if(linea === 2)
        {
            string = string.replace('["', "");
            string = string.replace('"]', "");
            string = string.replace('","', " ");
        }
    }
    return string;
}

//sirve para separar el estado de la tarea con coma para despues ser separada en dos variables

function separarEstadoDeString(titulo)
{
    if(titulo.indexOf(" en progreso") > -1)
    {
        titulo = titulo.replace(" en progreso", ",en progreso");
    }
    else if(titulo.indexOf(" pendiente") > -1)
    {
        titulo = titulo.replace(" pendiente", ",pendiente");
    }
    else if(titulo.indexOf(" terminada") > -1)
    {
        titulo = titulo.replace(" terminada", ",terminada");
    }

    return titulo;
}

//sirve para agregar una tarea y un estado / opcion : 1 devuelve titulo / otro numero devuelve estado

function agregarTareas(opcion)
{
    let estado; //estado de la tarea
    let titulo; //titulo de la tarea

    const process = require('process');
    
    //tomo todos los caracteres por terminal y lo guardo en titulo de la tarea
    titulo = process.argv;

    //borro la direccion de la pc y node app.js
    titulo = titulo.slice(3,titulo.length);
    
    //paso el array a string
    titulo = JSON.stringify(titulo);

    //limpio el string de otros caracteres

    titulo = limpiarString(titulo, 2);

    //agrego la coma para separar el estado de la tarea del titulo de la tarea

    titulo = separarEstadoDeString(titulo)

    //guardo el tamaño del string
    let maximo = titulo.length;

    //separo en 2 variables despues de la coma
    for(let i = 0 ; i < titulo.length ; i++)
    {
        if(titulo[i] == ",")
        {
            estado = titulo.slice(i+1,maximo); //guardo el estado de la tarea
            titulo = titulo.slice(0, i); //guardo el titulo de la tarea
        }
    }

    return opcion == 1 ? titulo : estado;
}

/*listado de tareas
-
- tarea : sirve para agregar datos desde la terminal usando la palabra tarea seguido de la tarea a anotar seguido del progreso de la misma
- ejemplo : node app.js tarea hacer tareas del playground en progreso
- salida : titulo : hacer tareas del playground
- salida : estado : en progreso
-
- listar : sirve para mostrar el listado del archivo JSON
- undefined : muestra un mensaje en caso de no ingresar ningun dato
- default : muestra un mensaje pidiendo al usuario que ingrese una opcion valida
-
*/

function listado(opcion)
{
    const process = require('process');

    switch(opcion = process.argv[2].toLowerCase())
    {
        case "tarea":
            let guardado; //sirve para guardar el string de los nuevos datos y escribirlos en el archivo JSON
            let agregarTitulo = agregarTareas(1); //agrego titulo a la variable
            let agregarProgreso = agregarTareas(2); //agrego estado a la variable
            //agrego nuevas tareas al array del archivo JSON
            tareasParseadas.push({titulo : agregarTitulo, estado : agregarProgreso});
            //guardo el array con los nuevos datos convertido a string
            guardado = JSON.stringify(tareasParseadas);
            //escribo los nuevos datos en el archivo json
            fs.writeFileSync('./tareas.json', guardado, "utf-8");
            break;

        case "listar":
            //paso a string el array de tareas
            let plantilla = JSON.stringify(tareasParseadas)
            //limpio los caracteres del archivo y dejo solo el texto para mostrar por terminal
            plantilla = limpiarString(plantilla, 1);
            //muestro por terminal la lista
            console.log(" Tareas : \n"+plantilla);
            break;

        case undefined:
            console.log("Atención - Tienes que pasar una acción.");
            break;
        default:
            console.log("No entiendo qué quieres hacer.");
    }
}

module.exports = listado;
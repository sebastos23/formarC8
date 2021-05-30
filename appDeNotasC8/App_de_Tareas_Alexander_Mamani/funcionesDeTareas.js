//Funciones de la App de Tareas

let fs = require('fs');
const process = require('process');

//leo el archivo JSON
let tareas = fs.readFileSync('./tareas.json', 'utf-8');

//paso a array el archivo JSON
let tareasParseadas = JSON.parse(tareas);

//Listar Tareas

function listarTareas(array)
{
    console.log("\nTareas: ");
    for(let i = 0 ; i<array.length ; i ++)
    {
        console.log("Titulo: "+ array[i].titulo +"\nEstado: "+array[i].estado+"\n");
    }
}

//Ingreso de datos

function ingresoDatos(datos, opcion)
{
    datos = process.argv
    let titulos = [];
    let estados = [];
    let error = 0;

    for(let i = 0 ; i < datos.length ; i++)
    {
        if(datos.lastIndexOf("progreso") > 0 || datos.lastIndexOf("terminada") > 0 || datos.lastIndexOf("pendiente") > 0)
        {
            if(datos.lastIndexOf("progreso") == -1)
            {
                if(i>1 && i<=((datos.length)-2))
                {
                    titulos[i] = datos[i];
                }
                if(i>((datos.length)-2))
                {
                    estados[i] = datos[i];
                }
            }
            else
            {
                if(i>1 && i<=((datos.length)-3))
                {
                    titulos[i] = datos[i];
                }
                if(i>((datos.length)-3))
                {
                    estados[i] = datos[i];
                }
            }
        }
        else
        {
            error = 1;
            opcion = null;
        }
        if(i == (datos.length-1) && error == 0)
        {
            titulos = titulos.join(" ");
            titulos = titulos.trim();
            estados = estados.join(" ");
            estados = estados.trim();
            if(opcion == 1)
            {
                opcion = titulos;
            }
            else
            {
                opcion = estados;
            }
        }
    }
    return opcion;
}

/*listado de tareas
-
- tarea : sirve para agregar datos desde la terminal usando la palabra tarea seguido de la tarea a anotar seguido del progreso de la misma
- ejemplo : node app.js tarea hacer tareas del playground en progreso
- Terminal : titulo : hacer tareas del playground
- Terminal : estado : en progreso
-
- listar : sirve para mostrar el listado del archivo JSON
- undefined : muestra un mensaje en caso de no ingresar ningun dato
- default : muestra un mensaje pidiendo al usuario que ingrese una opcion valida
-
*/

function listado(opcion)
{
    let agregarTitulo = [];
    let agregarEstado = [];
    let guardado; //sirve para guardar el string de los nuevos datos y escribirlos en el archivo JSON
    switch(opcion = process.argv[2].toLowerCase())
    {
        case "tarea":

            agregarTitulo = ingresoDatos(agregarTitulo,1); //agrego titulo a la variable
            agregarEstado = ingresoDatos(agregarEstado,2); //agrego estado a la variable
            //agrego nuevas tareas al array del archivo JSON y valido si se ingreso o no un estado

            if(agregarEstado == null)
            {
                console.log("ERROR : Debe ingresar el estado de la tarea : |pendiente | en progreso | terminada.");
            }
            else
            {
                tareasParseadas.push({titulo : agregarTitulo, estado : agregarEstado});
                //guardo el array con los nuevos datos convertido a string
                guardado = JSON.stringify(tareasParseadas);
                //escribo los nuevos datos en el archivo json
                fs.writeFileSync('./tareas.json', guardado, "utf-8");
                console.log("Tarea Agregada con exito!.");
            }
            break;

        case "listar":
            listarTareas(tareasParseadas);
            break;

        case undefined:
            console.log("Atención - Tienes que pasar una acción.");
            break;
        default:
            console.log("No entiendo qué quieres hacer.");
    }
}

module.exports = listado;
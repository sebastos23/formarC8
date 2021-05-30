let fs = require('fs');

module.exports = moduloTareas = {
    leerJSON : () => {
        let listaDeTareas = fs.readFilesync('./tareas.json', 'utf-8' )
        return JSON.parse(listaDeTareas)
    },
    escribirJSON: (titulo, estado) => {
        let nuevaTarea = {
            titulo : titulo,
            estado : estado
        }
        let tareasAnteriores = moduloTareas.leerJSON();

        tareasAnteriores.push(nuevaTarea);

    },
    guardarJSON: (arrayDeTareas) => {
        let nuevoJSON = JSON.stringify(arrayDeTareas);
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8' )
    },
    deshacer: () => {
        let tareas = moduloTareas.leerJSON();
        tareas.pop();
        moduloTareas.guardarJSON(tareas)
    },
    filtrarPorEstado: (estado) => {
        let listaDeTareas = moduloTareas.leerJSON();
        let tareasFiltradas = listaDeTareas.filtrar(tarea => {
            return tarea.estado.toLowerCase() === estado.toLowerCase()
        })
        return tareasFiltradas
    },
}
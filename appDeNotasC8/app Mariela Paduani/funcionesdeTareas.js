let fs = require('fs')

let listaDeTareas = {
    leerJSON : () => {
        let tareas = fs.readFileSync('./tareas.json', 'utf-8')
        return JSON.parse(tareas)
    }
}

module.exports = listaDeTareas
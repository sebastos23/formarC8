let fs = require('fs');

module.exports = moduloTareas = {
    leerJSON : () => {
    let archivoJSON = fs.readFileSync('./tareas.json', 'utf-8')
    return JSON.parse(archivoJSON)
    }
}
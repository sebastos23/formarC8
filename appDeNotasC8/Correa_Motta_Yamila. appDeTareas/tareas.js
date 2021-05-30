let fs = require('fs');


module.exports = moduloTareas = {
leerJson : () => {
let listaDeTareas = fs.readFileSync('./tareas.json', 'utf-8');
return JSON.parse(listaDeTareas);
}
}

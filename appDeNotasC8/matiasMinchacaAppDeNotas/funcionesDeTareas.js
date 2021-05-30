function funcionesDeTareas(){
    let fs = require("fs");
    let tareas = fs.readFileSync('./tareas.json', 'utf-8');
    let tareasParseado = JSON.parse(tareas);
    return (tareasParseado);
}

module.exports = funcionesDeTareas();
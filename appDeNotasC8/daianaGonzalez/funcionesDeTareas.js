let fs = require ('fs');
module.exports= moduloTareas = {
leerJSON:() => {
    let listaTareas = fs.readFileSync('./tareas.json','utf-8')
return JSON.parse(listaTareas)
}
}

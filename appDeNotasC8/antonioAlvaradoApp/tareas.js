let fs = require("fs") 

module.exports = moduloTareas = {
    leerJson : () => {
        let listaDeTareas = fs.readFileSync("./tareas.json", "utf-8") 
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

guardarJSON: () => {

},
deshacer: () => {

},
filtrar: () => {

}
}

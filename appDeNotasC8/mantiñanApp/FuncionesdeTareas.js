function listado() {
    let fs = require("fs");
    let leerarchivo = fs.readFileSync(__dirname + "/Tareas.json", "utf-8");
    let archivoarray = JSON.parse(leerarchivo);
    return archivoarray;
}

module.exports = listado;
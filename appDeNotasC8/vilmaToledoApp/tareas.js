let fs = require("fs")

module.exports = moduloTareas = {
    leerJSON : () => {
      let listaDeTareas = fs.readFileSync("./tareas.json", "utf-8")
      return JSON.parse(listaDeTareas)
    },     
  }
  


/*let moduloTareas = {
    leerJSON : () => {
        let listaDeTareas = fs.readFileSync("./tareas.json", "utf-8")
        return JSON.parse(listaDeTareas)
      },     
}
module.exports = moduloTareas*/
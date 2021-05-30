let fs = require("fs");

module.exports = moduloTareas = {
      leerjson : () =>{
          let listaDeTareas = fs.readFileSync('./tareas.json', 'utf-8')
       return JSON.parse(listaDeTareas)
        }, 
}

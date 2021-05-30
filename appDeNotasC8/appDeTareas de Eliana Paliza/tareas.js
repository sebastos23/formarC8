let fs =require('fs');

module.exports = moduloTareas ={
     tareas : () => { 
        let listaDeTareas = fs.readFileSync("./tareas.json", "UTF-8"); {
        return JSON.parse(listaDeTareas)}
    },

};
console.log(moduloTareas.tareas())
let fs = require('fs');
let arrayJSON = fs.readFileSync('./tareas.json', 'utf-8')

module.exports = arrayJSON;
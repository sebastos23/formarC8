function parsear() {

let fs = require('fs');

let leerJSON = fs.readFileSync('./tareas.json', 'utf-8'); 

let tareasParseadas = JSON.parse(leerJSON);

return tareasParseadas;
}

module.exports = {parsear}; 


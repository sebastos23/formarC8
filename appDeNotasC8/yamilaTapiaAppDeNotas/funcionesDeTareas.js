const fs = require('fs');
const tareasjson = JSON.parse(fs.readFileSync('./tareas/tareas.json', 'utf-8'));

module.exports = tareasjson
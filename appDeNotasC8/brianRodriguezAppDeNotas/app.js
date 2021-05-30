const fs = require('fs');
let data = fs.readFileSync('tareas.json')
data = JSON.parse(data)


if (process.argv[2] == 'listar'){
    console.log(data)
    for (let i = 0 ; i<data.length;i++){
        console.log('Tarea: '+data[i]['titulo'])
        console.log('Estado: '+data[i]['estado']+'\n')
    }
}else if (process.argv[2] == undefined) {
    console.log('Atención - Tienes que pasar una acción.')
}else{
    console.log('No entiendo qué quieres hacer.')
}

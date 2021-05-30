let fs = require('fs');

let tareas = fs.readFileSync('./tareas.json','utf-8')
//console.log(tareas)

let tareasParaHoy = JSON.parse(tareas)

//console.log(tareasParaHoy)

const process = require('process')
let operacion= process.argv[2]
   
 switch  (operacion) {
	case  'listar': 
    	console.log(tareasParaHoy)
	break;
	case undefined:
    	console.log('Atención - Tienes que pasar una acción')
	break;
    	default : console.log('No entiendo lo que quieres hacer')
 }

 module.exports = (operacion) 

        
        
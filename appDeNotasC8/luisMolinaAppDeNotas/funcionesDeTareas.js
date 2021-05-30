const fs = require('fs'); // requiero el modulo nativo de node (file system)

const tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'))
let titulo = process.argv[2];

let listar = (titulo) =>{

  switch (true) {
    case titulo === "listar":
      console.log(tareas);
      for(let i=0; i < tareas.lenght; i++){
        console.log(i+1 + '_' + tareas[i].titulo + " " + tareas[i].estado);
      }
        break;
    case titulo !== undefined:
       console.log("No entiendo qué quieres hacer");
       break;
    
    default:
      console.log("Atención-Tienes que pasar una acción"); 
      break      
     }
}

listar(titulo) 


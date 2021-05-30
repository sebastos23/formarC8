function listar() {
    let fs = require ('fs');
    let arrayJSON= fs.readFileSync('tareas.json','utf8');
    let arrayParseado=JSON.parse(arrayJSON)
                //console.log(arrayParseado);
    let listar=process.argv[2]

    switch (listar) {
    case "listar":
        for (let i = 0; i < arrayParseado.length; i++) {
            console.log(arrayParseado[i].Titulo + " - "+arrayParseado[i].Estado);
        } 
       // console.log(arrayParseado);
        break;
    case undefined: 
        console.log("Atención - Tienes que pasar una acción.");
        break;
        
    default:
        console.log("No entiendo qué quieres hacer.");
        break;
    }
}
module.exports=listar;
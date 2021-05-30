function listar(operacion, tareas){
    if(operacion !== undefined){
        switch(operacion.toLowerCase()){
            case "listar":
                console.log(tareas);
                break;
            default:
                console.log("No entiendo qué quieres hacer.");
        }
    }else{
        console.log('Atención - Tienes que pasar una acción.');
    }
}

module.exports = listar;
let arrayParse = require('./app');
 function listado(listar, titulo, estado ){
    switch (listar.toLowerCase()){
        case 'listar':
            console.log(arrayParse());
            console.log('Para agregar escriba "agregar", para modificar "modificar" y eliminar "eliminar"\n***\
*****************************************************************************');
            break
        case 'undefined':
            console.log('Atención - Tienes que pasar una acción'+ '\n' + 'Acciones: listar , agregar , modificar , eliminar');
            break
        case 'agregar':
            return 'agrega';
            break
        case 'eliminar':
            return 'elimina';
            break
        case 'modificar':
            return 'modifica';
            break
        default:
            console.log('No entiendo qué quieres hacer\n*****************************');
    }
} 
module.exports=listado;


let fs = require('fs');
// requerimos a la funcion file system -- elegimos la ruta
let arrayapp = fs.readFileSync('./tareas.json', 'utf-8');
/*  console.log(arrayapp) */
let arrayParseado = JSON.parse(arrayapp)
/* console.log(arrayParseado) */
//mirar clase 7, de la calculadora proces.argv
const process = require('process');// requerir proces para poder usar la consola
//para acceder a la segunda posicion
let indice = process.argv[2];

function casos (){
    switch(indice){
        case 'listar':
        console.log(arrayParseado);
        break;
        case undefined: 
        console.log('Atencion - tienes que elegir una accion');
        break;
        default:
        console.log('No entiendo lo que quieres hacer');
    
    }
}
 
 
/* if (indice !== undefined ){
if (indice == 'listar'){
    console.log(arrayParseado);
}else{console.log('No entiedo lo que quieres hacer')}
}else{console.log('Tienes que elegir una accion')} */
//expoprtar a  funcion de tareas
module.exports = casos;




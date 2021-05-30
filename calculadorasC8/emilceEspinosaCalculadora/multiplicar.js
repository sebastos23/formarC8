/*function multiplicar (x1, x2){
    return x1 * x2;
}
*/

//opcion vista en clase

function multiplicar (a, b){
    if (Number(a) === 0 || Number(b) === 0){
        return 0
    } else{
        return a * b;
    }
}
module.exports = multiplicar;
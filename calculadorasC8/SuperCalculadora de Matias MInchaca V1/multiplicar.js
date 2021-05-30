function multiplicar(a, b){
    if((a) === 0 || (b) === 0){
       return 0
    }else if((a) > 0 || (b) > 0){
        return a * b
    }
}
module.exports = multiplicar;
/* Esta es la forma que me di a entender por la
consiga sino creo que es para mas seguridad de que 
la operacion se cumpla, sino de igual modo esta siempre un 
numero multiplicado por 0 es igual a 0.
asi que simplemente seria asi:
function multiplicar(n1, n2){
    return n1/n2
} */
//console.log(multiplicar(32, 0))
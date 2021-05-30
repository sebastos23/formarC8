function multiplicar (numeroA,numeroB) {
    if ((numeroA!=0) && (numeroB!=0)){
     return numeroA*numeroB
    }else{
        return 0
    };
}
console.log(multiplicar(75,2));

module.exports = multiplicar

function multiplicar (n1, n2){
    if (Number(n1) === 0 || Number(n2) === 0){
        return 0
    }else{
        return n1 * n2;  
    }
    
}
module.exports = multiplicar;
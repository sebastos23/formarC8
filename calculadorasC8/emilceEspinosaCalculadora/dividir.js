//dividir

/*function dividir (x1, x2){
    if(x2 == 0){
    return "no se puede dividir por 0"
    }
    else {
     return x1 / x2;
 }
}*/



//ejercicio de la clase

  function dividir (a, b) {
    
    if (Number(a) === 0 || Number(b) === 0){
        return "No se puede dividir por 0"
    }else {
        return a / b;
    }
}
    module.exports = dividir
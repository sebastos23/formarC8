let dividir = function (x,y){
    if (x==0 | y==0){
        return "No se puede dividir por cero."
    }
    return x/y
}

module.exports = dividir
function dividir(a, b){
    if(Number(a) === 0 || Number(b) === 0){
        return "No se puede dividir por 0";
    }else{
        return a / b;
    }
}

module.exports = dividir;
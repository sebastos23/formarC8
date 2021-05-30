function dividir (n1, n2){
    if (Number(n1) === 0 || Number(n2) === 0){
    return "No se puede dividir por cero"
    } else{
        return n1 / n2;  
    }
    
}

module.exports = dividir;


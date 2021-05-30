function dividir (number1, number2){
     
    if (number1 != 0 && number2 != 0){
        return (number1 / number2) 
    } else 
        return "No se puede dividir por cero"
}

module.exports = dividir;
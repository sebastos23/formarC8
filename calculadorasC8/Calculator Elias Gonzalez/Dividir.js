function Dividir (numero1 , numero2) {
    if (numero1 / numero2 ===0 || numero2 / numero1 === 0 ||  numero2 / numero1 !== NaN   )
        return 'no se puede dividir por cero'
        else {return numero1 / numero2}  

}

module.exports = Dividir;
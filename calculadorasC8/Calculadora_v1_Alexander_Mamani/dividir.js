function dividir(numero, numero2){
    let resultado;

    if(numero === 0 || numero2 === 0)
    {
        return "No se puede dividir por cero";
    }
    else
    {
        return numero / numero2;
    }
}

module.exports = dividir;
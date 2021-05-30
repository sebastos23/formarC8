function dividir (n1, n2){
    if( n1 == 0 || n2 == 0){ // Esto está mal porque 0 dividido por cualquier número te tendría que dar 0. En realidad -para funcionar de forma correcta- debería ser así: if( n2 == 0). Pero si la consigna queiere otra cosa, le damo'.
        return "No se puede dividir por cero"
    }else{
        return n1 / n2;
    }
}

module.exports = dividir;
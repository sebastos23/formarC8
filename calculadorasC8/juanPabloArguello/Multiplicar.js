function Multiplicar(numero1, numero2){
    if(Number(numero1)===0||Number(numero2)===0){
        return 0;
    }else{
        return numero1 *numero2;
    }
}
module.exports= Multiplicar;
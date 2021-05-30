function Dividir(numero1, numero2){
  if(Number(numero1)===0||Number(numero2)===0){
    return "Nose puede dividir por cero";
  }else{
    return numero1/numero2;
  }
}

module.exports=Dividir;
function dividir (N1, N2){
    if(Number(N1) === 0 || Number(N2) === 0){
return "no se puede dividir por cero(0)";
    }else{
        return N1/N2;
    }
    }
  
    
    module.exports = dividir ;
function dividir (num1, num2) {
    if (Number(num1)== 0 || Number(num2)== 0) {
        return 0;
    } else {
        return num1 / num2;
    }
}

//console.log(dividir(100, 2));

module.exports = dividir;
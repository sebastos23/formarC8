let sumar = require('./sumar')
let restar = require('./restar')
let multiplicar = require('./multiplicar')
let dividir = require('./dividir')

//EJEMPLOS
console.log(sumar(-5, 12))
console.log(restar(12, 5))
console.log(multiplicar(2, 9))
console.log(dividir(18, 9))
console.log(dividir(0,123456789))

//Con respecto a las preguntas que estan en playground: Considero que si se hubiese hecho todo en un mismo archivo, aparte de ser un archivo mas largo, tal vez seria más propenso a cometer algún error o que se escape algún detalle. Además, haciendolo de esta manera, nos permite usar esos mismos archivos para otros trabajos distintos. Cosa que no habria podido suceder si se hacia todo en uno solo. Considero que esta metodología se utilizara más ya que a medida que se vayan haciendo nuevas líneas de códigos y demás, tal vez necesitemos usar archivos ya creados en distintos lugares, lo que lo haria mas práctico que este asi sub dividido. Ademas de que también sería más fácil corregir o modificar algo sin afectar todo un trabajo hecho. 
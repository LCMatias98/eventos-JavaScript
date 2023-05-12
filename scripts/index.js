/* console.log("hola") */
const resultadoElement = document.getElementById("resultado");
const formulario = document.getElementById("formulario");
const estatura = document.getElementById("estatura")
const peso = document.getElementById("peso")
const resultado = document.getElementById("resultado")
const calcularIMC = document.getElementById("calcular-imc")


console.log(calcularIMC)
console.log(estatura.value)
console.log(peso.value)

console.log(resultadoElement.value)


formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    resultadoElement.value = peso.value / ((estatura.value * estatura.value)/10000)
    console.log(resultadoElement)
})


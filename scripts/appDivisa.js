/* console.log("hola") */
const cantidadPesos = document.getElementById("cantidad-pesos");
const tipoCambio = document.getElementById("tipo-cambio");
const cantidadDolares = document.getElementById("cantidad-dolares");

const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (e) =>{
    e.preventDefault()
    const cantidad = parseFloat(cantidadPesos.value)
    const cambio = parseFloat(tipoCambio.value)
    const resultado = cantidad / cambio
    cantidadDolares.value = resultado.toFixed(2)
  })
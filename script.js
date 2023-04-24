const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

//Prevent default evita que se recargue si es un form

form.addEventListener('submit',sumarInputsValues);

form.addEventListener('mouseover',enviarFormulario);

// btnCalcular.addEventListener('click',btnOnClick);

function sumarInputsValues(event) {
    console.log({event})
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = `Resultado: ${sumaInputs}`
}

function enviarFormulario(e) {
    e.preventDefault();
    
    alert("virus")
}
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const sum = document.querySelector('#sum');
const dif = document.querySelector('#dif');
const pro = document.querySelector('#pro');
const div = document.querySelector('#div');

const pResult = document.querySelector('#result');


function btnOnClick(){
    let value1 = parseInt(input1.value);
    let value2 = parseInt(input2.value);
    let resultValue = 0;
    if (sum.checked){
        resultValue = value1+value2
    } else if (dif.checked){
        resultValue = value1-value2
    } else if (pro.checked){
        resultValue = value1*value2
    } else if (div.checked){
        resultValue = value1/value2
    }

    resultValue = `The calculated value is: ${resultValue}`
    pResult.innerHTML = resultValue
}

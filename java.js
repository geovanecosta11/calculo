let salario = document.querySelector('#salario');
let tempo = document.querySelector('#tempo');
let resultado = document.querySelector('span');

function fgts(){
    resultado.innerHTML = parseFloat(salario.value/100*8)*tempo.value;
    
}
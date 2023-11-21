
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");
 
let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function(){
    somar(Number(valor1.value), Number(valor2.value));
});
let btSubtracao = document.querySelector("#btSoma");
btSoma.addEventListener("click", function(){
    somar(Number(valor1.value), Number(valor2.value));
});
let btDivisão = document.querySelector("#btSoma");
btSoma.addEventListener("click", function(){
    somar(Number(valor1.value), Number(valor2.value));
});
let btMult = document.querySelector("#btSoma");
btSoma.addEventListener("click", function(){
    somar(Number(valor1.value), Number(valor2.value));
});

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}

function divisao(a, b){
    let div = a / b;
    resultado.innerHTML = div;
}
function multiplicacao(a, b){
    let multiplicacao = a * b;
    resultado.innerHTML = multiplicacao;
}
function subtracao(a, b){
    let subtracao = a - b;
    resultado.innerHTML = subtracao;
}


const valorPadrao = 0;

let valor = 0;

console.log(valor);

function add(v) {
    valor += v
}

add(5);
console.log(valor);

add(10);
console.log(valor);

function somar(n1 = valorPadrao, n2 = valorPadrao) {
    let res;
    res = n1 + n2
    return res
}

let resultado = somar(5,7);
// console.log(resultado);

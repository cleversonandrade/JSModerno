let n = 0;
let max = 1000;
let pares = 0;

for(let i = 0; i < max; i++) {
    if(i%2 == 0) {
        continue;
    }
    pares++;
}

console.log('Quantidade de pares: ' + pares);
console.log('Fim do programa');
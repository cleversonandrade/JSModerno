const idades = [10, 15, 32, 47, 18, 55, 6, 92];
const maiorIdade = idades.filter((val) => {
    if(val >= 18) {
        return val;
    };
});

const menorIdade = idades.filter((val) => {
    if(val < 18) {
        return val;
    };
});

console.log(idades);
console.log(maiorIdade);
console.log(menorIdade);
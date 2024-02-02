let jogador1 = {nome: 'Cleverson', energia: 100, vidas: 3, magia: 150};
let jogador2 = {nome: 'Pietro', energia: 100, vidas: 5, velocidade: 200};
let jogador3 = {...jogador1,...jogador2};

console.log(jogador3);
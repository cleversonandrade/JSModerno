function* perguntas() {
    const nome = yield 'Qual seu nome ? '
    const idade = yield 'Qual sua idade ?'
    return 'Seu nome é ' + nome + ', sua idade é ' + idade + ' anos.'
}

const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next('Cleverson').value);
console.log(itp.next('40').value);

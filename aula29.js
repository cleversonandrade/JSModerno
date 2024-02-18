function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    this.dadosDoAluno = function() {
        setTimeout(() => {
            console.log(this.nome);
            console.log(this.nota);
        }, 2000)
    }
}

const alunoNovo = new aluno('Cleverson', 25);
alunoNovo.dadosDoAluno();

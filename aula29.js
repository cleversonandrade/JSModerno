function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    this.dados = function() {
        setTimeout(function(){
            console.log(this.nome);
            console.log(this.nota)
        }, 2000)
    }

    this.dados1 = function() {
        setTimeout(() => {
            console.log(this.nome);
            console.log(this.nota)
        }, 2000)
    }
}

const aluno1 = new aluno('Cleverson', 95);
aluno1.dados();
aluno1.dados1();

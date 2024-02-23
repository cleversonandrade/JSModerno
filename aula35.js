const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');
const botao = document.querySelector('#botao_copiar');
const cursos = [...document.querySelectorAll('.curso')];

cursos.map((elemento) => {
    elemento.addEventListener('click', (e) => {
        const curso = e.target;
        curso.classList.toggle('selecionado');
       
    });
});

botao.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')];
    cursosSelecionados.map((elemento) => {
        caixa2.appendChild(elemento);
    });
});
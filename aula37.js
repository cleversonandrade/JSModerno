const caixa1 = document.querySelector('#caixa1');
const btn_c1 = document.querySelector('#c1');
const cursos = [...document.querySelectorAll('.curso')];

caixa1.addEventListener('click', () => {
    console.log('clicou');
});

cursos.map((evento) => {
    evento.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
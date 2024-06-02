const caixa1 = document.querySelector('#caixa1');
const btn_c = [...document.querySelectorAll('.curso')];
const c1_2 = document.querySelector('#c1_2');
const cursos = [
                'HTML',
                'CSS',
                'JavaScript',
                'PHP',
                'React',
                'MySQL',
                'React Native'
            ];

cursos.map((elemento, chave) => {
    const novoElemento = document.createElement('div');
    caixa1.appendChild(novoElemento);
    novoElemento.setAttribute('id', 'c' + (chave + 1));
    novoElemento.setAttribute('class', 'curso c1');
    novoElemento.innerHTML = elemento;
});
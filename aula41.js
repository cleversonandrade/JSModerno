const caixa1 = document.querySelector('#caixa1');
const elementos = [...document.querySelectorAll('.curso')];

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

    const btnLixeira = document.createElement('img');
    btnLixeira.setAttribute('src', './chat.png');
    btnLixeira.setAttribute('class', 'btnLixeira');
    btnLixeira.addEventListener('click', (e) => {
        caixa1.removeChild(e.target.parentNode);
    });

    novoElemento.appendChild(btnLixeira);
    
});
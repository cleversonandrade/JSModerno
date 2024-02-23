const cursos = [...document.querySelectorAll('.curso')];

cursos.map((elemento) => {
    elemento.addEventListener('click', (e) => {
        const elemento = e.target;
        elemento.classList.add('destaque');
        console.log(elemento + 'Foi clicado');
    });
});

const cursos = [...document.querySelectorAll('.curso')];

cursos.map((el) => {
    el.addEventListener('click', (e) => {
        const el = e.target;
        el.classList.add('destaque');
    });
});

const c1 = document.querySelector('#c1');

c1.addEventListener('click', (e) => {
    const elemento = e.target
    elemento.classList.add('destaque');
});
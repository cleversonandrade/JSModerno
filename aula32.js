const todosCursos = [...document.getElementsByClassName('curso')];
const todosCursosC1 = [...document.getElementsByClassName('c1')];
const todosCursosC2 = [...document.getElementsByClassName('c2')];
const cursoEspecial = [...document.getElementsByClassName('curso')][1];

console.log(todosCursos);
console.log(todosCursosC1);
console.log(todosCursosC2);
console.log(cursoEspecial);

todosCursosC2.map((e) => {
    e.classList.add('destaque');
});
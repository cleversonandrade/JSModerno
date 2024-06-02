const todasDiv = [...document.getElementsByTagName('div')];
const todosCursos = [...document.getElementsByClassName('curso')];
const todosCursosC1 = [...document.getElementsByClassName('c1')];
const todosCursosC2 = [...document.getElementsByClassName('c2')];
const cursoEspecial = document.getElementById('c5');

// const todasDivs_query = [...document.querySelectorAll('div[class]')];
const todasDivs_query = [...document.querySelectorAll('div > p')];
const todosCursos_query = [...document.querySelectorAll('.curso')];
const todosCursosC1_query = [...document.querySelectorAll('.c1, p')];
const todosCursosC2_query = [...document.querySelectorAll('.c2')];
const cursoEspecial_query = document.querySelector('#c2');
const cursoEspecial_query1 = document.querySelectorAll('#c2')[0];


console.log(todasDivs_query);



// console.log(todosCursos_query);
// console.log(todosCursosC1_query);
// console.log(todosCursosC2_query);
// console.log(cursoEspecial_query1);

// console.log(todasDiv);
// console.log(todosCursos);
// console.log(todosCursosC1);
// console.log(todosCursosC2);
// console.log(cursoEspecial);


// todosCursosC2.map((e) => {
//     e.classList.add('destaque');
// });
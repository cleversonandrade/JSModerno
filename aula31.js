const el1 = document.getElementById('c1');
const el2 = document.getElementById('c2');
const el3 = document.getElementById('c3');
const el4 = document.getElementById('c4');
const el5 = document.getElementById('c5');
const el6 = document.getElementById('c6');

const arrayElementos = [el1, el2, el3, el4, el5, el6];

const colecaoHTML = [...document.getElementsByTagName('div')];

console.log(colecaoHTML);

colecaoHTML.map((e) => {
    console.log(e);
});
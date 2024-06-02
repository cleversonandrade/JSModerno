const elemento1 = document.getElementById('c1');
const elemento2 = document.getElementById('c2');
const elemento3 = document.getElementById('c3');
const elemento4 = document.getElementById('c4');
const elemento5 = document.getElementById('c5');
const elemento6 = document.getElementById('c6');

const arrayElementos = [elemento1, elemento2, elemento3, 
                        elemento4, elemento5, elemento6];


arrayElementos.map((e) => {
    e.innerHTML = 'Cleverson';
    console.log(e);
});

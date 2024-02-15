const elementos = document.getElementsByTagName('div');
const valores = Array.prototype.map.call(elementos, ({innerHTML}) => innerHTML)
console.log(valores);

// let elementos = document.getElementsByTagName('div');
// elementos = [...elementos];
// console.log(elementos);
// elementos.map((e, i) => {
//     e.innerHTML = 'Texto alterado'
// });




// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'REACT'];
// let c = cursos.map((e, i) => {
    //     return e 
    // })
    
    // console.log(c)
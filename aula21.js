function estudos() {
    let n1 = 5;
    let n2 = 2;
    let res = n1 * n2;
    if(res%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = estudos();
console.log(res);
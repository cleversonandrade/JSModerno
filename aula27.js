function* nomes() {
    yield 'Cleverson'
    yield 'Jéssica'
    yield 'Kauã'
    yield 'Pietro'
    yield 'Billy'
}

const itc = nomes();
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);


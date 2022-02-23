function* createNames() {
    yield "Wawan";
    yield "Setiawan";
    yield "Modeong";
}

console.info(createNames());

const names = createNames();
// console.info(names[0]); //tidak bisa mengakses index karena sifatnya iterable
for (const name of names) {
    console.info(name);
}

// lazy
function* buatGanjil(value) {
    for (let i = 0; i < value; i++) {
        if (i % 2 === 1) {
            console.info(`Yield ${i}`);
            yield i;
        }
    }
}

// eager
function buatGanjilArray(value) {
    const result = [];
    for (let i = 0; i < value; i++) {
        if (i % 2 === 1) {
            console.info(`Yield ${i}`);
            result.push(i);
        }
    }
    return result;
}


const numbers = buatGanjil(100);
// for (const number of numbers) {
//     console.info(number);
// }
console.info(numbers.next().value);
console.info(numbers.next().value);
console.info(numbers.next().value);
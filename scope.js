// ini global scope
let counter = 0;

// ini global scope
function hitMe() {
    // ini local scope hitMe
    counter++;
}

// ini global scope
function othere() {
    // ini local scope other
}

hitMe();
hitMe();

console.info(counter); //2

// ini global scope
function first() {
    // ini local scope first
    let firstVarible = "First";

    function firstNested() {
        console.info(firstVarible);
        const firstNestedVariable = "First Nested";
    }

    firstNested();
    console.info(firstNestedVariable); //error karena local varible
}

// ini global scope
function second() {
    // ini local scope second
    let secondVariable = "Second";
    // console.info(firstVarible); //error karena local varible
}

first();
second();

// console.info(firstVarible); //error karena local varible
// console.info(firstVarible); //error karena local varible
function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    console.info(`Total ${name} is ${total}`);
}

sum("Orange", 10, 20, 30, 40, 50, 60);
sum("Apple", 10, 20, 30, 40, 50, 60);
sum("Banana", 10, 20, 30, 40, 50, 60);
// Spread Syntax
const values = [10, 10, 10, 10, 10];
sum("Test", ...values);



// Argument Object ini adalah versi lama sebelum ada rest parameter
function oldSum() {
    let total = 0;
    for (const argument of arguments) {
        total += argument;
    }
    console.info(`Total is ${total}`);
}

oldSum(1, 2, 3, 4, 5);
// const sayHello = (name) => {
//     const say = `Hello ${name}`;
//     console.info(say);
// }

// arrow function tanpa block kurung kurawal
// const sayHello = (name) => console.info(`Hello ${name}`);
// jika parameternya cuma 1 maka bisa tanpa tanda kurung
const sayHello = name => console.info(`Hello ${name}`);

sayHello("Wawan");

// const sum = (first, second) => {
//     return first + second;
// }

// jika return nya cuma 1 baris maka bisa seperti ini
const sum = (first, second) => first + second;

console.info(sum(100, 100));

function giveMeName(callback) {
    callback("Wawan");
}
// Versi Anonymous Function
// giveMeName(function (name) {
//     console.info(`Hello ${name}`);
// })

// Versi Arrow Function
giveMeName((name) => console.info(`Hello ${name}`));
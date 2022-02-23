function sayHello(name) {
    console.info(`Hello ${name}`);
}

sayHello("Wawan");

const say = sayHello;

say("Modeong");

function giveMeName(callback) {
    callback("Wawan"); // sayHello("Wawan");
}

giveMeName(sayHello);
giveMeName(say); //giveMeName(sayHello);
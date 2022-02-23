// function masukkan ke dalam variabel
const say = function (name) {
    console.info(`Hello ${name}`);
}

say("Wawan");
say("Modeong");


// bisa juga masukkan dalam parameter
function giveMeName(callback) {
    callback("Wawan");
}

giveMeName(say);

giveMeName(function (name) {
    console.info(`Hai ${name}`);
});
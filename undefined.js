let name = "wawan";

if (name === undefined) {
    console.info("UNDEFINED");
} else {
    console.info("DEFINED");
}

const names = ["Wawan", "Modeong"];
// delete names[0];

if (names[1] === undefined) {
    console.info("ARRAY UNDEFINED");
} else {
    console.info("ARRAY DEFINED");
}

const person = {
    name: "Wawan"
};
if (person.name === undefined) {
    console.info("OBJECT UNDEFINED")
} else {
    console.info("OBJECT DEFINED");
}
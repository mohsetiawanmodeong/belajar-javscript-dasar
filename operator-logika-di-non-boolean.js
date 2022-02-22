console.info("Hello" || "");
console.info("" || []);
console.info("0" || "NOL");
console.info(0 || "NOL");
console.info(null || "NULL");
console.info(undefined || "UNDEFINED");
console.info(0 || false);

const person = {
    firstName: "Wawan",
    lastName: "Modeong",
};

const names = person.firstName || person.lastName;
console.info(names);

console.info("Hello" && "");
console.info("" && []);
console.info("0" && "NOL");
console.info(0 && "NOL");
console.info(null && "NULL");
console.info(undefined && "UNDEFINED");
console.info("undefined" && "null");
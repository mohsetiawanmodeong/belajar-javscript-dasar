const person = {
    firstName: "Mohammad",
    middleName: "Setiawan",
    lastName: "Modeong",
}

console.info(person.firstName);
console.info(person.middleName);
console.info(person.lastName);

const firstName = "Uyo";
const lastName = "Master";

with(person) {
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
}
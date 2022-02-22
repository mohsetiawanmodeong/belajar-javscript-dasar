const person = {
    firstName: "Wawan",
    lastName: "Modeong"
}

// const result = "firstName" in person; //true karena objeknya ada
if ("firstName" in person) {
    console.info(`Hello ${person.firstName}`);
} else {
    console.info("Ngk ada isi");
}

const student = {
    firstName: "Wawan",
    middleName: undefined,
    lastName: "Modeong",
}

if ("middleName" in student) {
    console.info(`Hello ${student.middleName}`);
} else {
    console.info("Ngk ada isi");
}

const names = [null, "Wawan", null];
const result = 0 in names;
console.info(result);
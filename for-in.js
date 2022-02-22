const person = {
    firstName: "Wawan",
    middleName: "Setiawan",
    lastName: "Modeong"
};

for (const property in person) {
    console.info(`${property} : ${person[property]}`);
}

const names = ["Wawan", "Setiawan", "Modeong"];
for (const index in names) {
    console.info(`${index} : ${names[index]}`);
}
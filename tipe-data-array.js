let arrayKosong = [];

let arrayNama = ["Wawan", "Uyo", "Modeong"];

console.log(arrayKosong);
console.log(arrayNama);

const names = [];
names.push("Wawan");
names.push("Modeong", "Ayu");
names.push("Budi", "Uyo");

console.table(names);

console.info(names[0]);
console.info(names[1]);
console.info(names[2]);

names[0] = "Programmer";
names[1] = "Adalah";
names[2] = "Magician";

console.table(names);

delete names[3];

console.table(names);

names.push("Bismillah");

console.table(names);

names[3] = "Diubah Lagi";
names.push(1, 2, 3, 4, 5);
names.push(["Moh.", "Setiawan", "Modeong"]);

console.table(names);
const name = "Moh. Setiawan Modeong";
const firstName = "Moh.";
const middleName = "Setiawan";
const lastName = "Modeong";

const template = `Nama : ${firstName} ${middleName} ${lastName}`;
const lama = "Nama : " + firstName + " " + middleName + " " + lastName;
console.log(lama);
console.log(template);

const nilai = 50;
const template2 = `Name : ${name}, Lulus : ${nilai > 70}`;
console.log(template2);

const multiline = `Nama Saya Setiawan, 
Seorang Fullstack Developer
Kalau lelah ya tidur`;
console.log(multiline);
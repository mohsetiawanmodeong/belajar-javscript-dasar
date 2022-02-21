const person = {
    "nama lengkap": "Moh. Setiawan Modeong",
    alamat: "Boltim",
    umur: 22
};

console.table(person);

// ubah property/attribute
// person["nama"] = "Moh. Setiawan Modeong";
// person["alamat"] = "Boltim";
// person["umur"] = 22;

console.info(`Nama : ${person["nama lengkap"]}`);
console.info(`Alamat : ${person.alamat}`);
console.info(`Umur : ${person.umur}`);

delete person["umur"];

console.table(person);
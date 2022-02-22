const orang = {
    "nama lengkap": "Moh. Setiawan Modeong",
    alamat: "Boltim",
    umur: 22
};

console.table(orang);

// ubah property/attribute
// person["nama"] = "Moh. Setiawan Modeong";
// person["alamat"] = "Boltim";
// person["umur"] = 22;

console.info(`Nama : ${orang["nama lengkap"]}`);
console.info(`Alamat : ${orang.alamat}`);
console.info(`Umur : ${orang.umur}`);

delete orang["umur"];

console.table(orang);
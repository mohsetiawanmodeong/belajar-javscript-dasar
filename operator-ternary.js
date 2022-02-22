const nilai = 80;
let ucapan;

if (nilai > 75) {
    console.info("Selamat anda lulus");
} else {
    console.info("Silahkan coba lagi");
}

ucapan = nilai >= 75 ? "Selamat anda lulus" : "Silahkan coba lagi";
console.info(`${ucapan}`);
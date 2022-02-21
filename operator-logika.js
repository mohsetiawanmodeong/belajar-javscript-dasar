const nilaiUjian = 90;
const nilaiAbsensi = 90;

const lulusUjian = nilaiUjian > 75;
console.log(lulusUjian);
const lulusAbsensi = nilaiAbsensi > 75;
console.log(lulusAbsensi);

const lulus = lulusUjian && lulusAbsensi;
console.log(lulus);
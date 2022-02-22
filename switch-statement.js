const nilai = "D";

switch (nilai) {
    case "A":
        console.info("Ajeb Banget");
        break;
    case "B": //B dan C menjadi sama outpuntya
    case "C":
        console.info("Cukup Lah");
        break;
    case "D":
        console.info("Doh Belajar Lagi");
        break;
    default:
        console.info("Pulang jo");
        break;
}

if (nilai === "A") {
    console.info("Ajeb Banget");
} else if (nilai === "B" || nilai === "C") {
    console.info("Cukup Lah");
} else if (nilai === "D") {
    console.info("Doh Belajar Lagi");
} else {
    console.info("Pulang jo");
}
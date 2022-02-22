let parameter = null;

let data = parameter;
if (data === undefined || data === null) {
    data = "Nilai Default";
}

console.info(`${data}`);

data = parameter ? ? "Nilai Default";

console.info(`${data}`);
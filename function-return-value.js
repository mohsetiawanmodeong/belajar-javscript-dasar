// membuat function dengan parameter dan return value
function sayHello(firstName, lastName) {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
}



// memanggil function dan menangkap return value nya
const result = sayHello("Wawan", "Modeong");
console.info(`${result}`);

function getFinalValue(value) {
    if (value > 90) {
        return "A";
    } else if (value > 80) {
        return "B";
    } else if (value > 70) {
        return "C";
    } else if (value > 60) {
        return "D";
    } else {
        return "E";
    }
}

const finalValue = getFinalValue(76);
console.log(finalValue);



function isContains(array, searchValue) {
    for (const element of array) {
        console.info(`Iterasi Element ${element}`);
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}

const array = [1, 34, 34, 34, 234, 2452, 34, 234];
const search = 34;
const found = isContains(array, search);
console.log(`${found}`);
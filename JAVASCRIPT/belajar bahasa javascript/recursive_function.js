// recursive function adalah kemampuan function untuk memanggil function dirinya sendiri

// kasus menggunakan looping
function faktorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
        // 1.1.2.1.3.1.4.1.5.1
    }
    return result;
}
console.log(faktorial(5));
console.log(1 * 2 * 3 * 4 * 5);

function kurang(...value) {
    return value.reduce((accumulator, currentValue) => accumulator - currentValue);
}

console.log(kurang(10, 5));

// mnggunakan recursive function atau function yang memanggil dirinya sendiri
function faktorialRecursive(value) {
    if (value === 1) {
        return 1;
    }
    else {
        return value * faktorialRecursive(value - 1); // disini function faktorialRecursive memanggil dirinya sendiri
    }
}
console.log(faktorialRecursive(5));
// 5 * faktorialRecursive(4)
// 5 * 4 * faktorialRecursive(3)
// 5 * 4* 3 *  faktorialRecursive(2)
// 5 * 4 *3 * 2 * faktorialRecursive(1)
// 5 * 4  3 * 2 * 1


function pertambahan(value){
    if(value === 0){
        return 0;
    }
    else{
        return value + pertambahan(value - 1);
    }
}

console.log(pertambahan(5)); // 5 + 4 + 3 + 2 + 1 + 0


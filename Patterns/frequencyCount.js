// function sameSquared(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     const freqCounter = {};
//     for (let value of arr1) {
//         freqCounter[value ** 2] = (freqCounter[value ** 2] || 0) + 1;
//     }
//     for (let value of arr2) {
//         if (freqCounter[value] > 1 || freqCounter[value] === undefined) return false;
//     }
//     return true;
// }

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const freqCounter = {};
    for (let value of arr1) {
        freqCounter[value] = (freqCounter[value] || 0) + 1;
    }
    for (let value of arr2) {
        if (freqCounter[value] < 1 || freqCounter[value] === undefined) return false;
        freqCounter[value] -= 1;
    }
    return true;
}

function sameFrequency(num1, num2) {
    const arr1 = String(num1).split("").map((n) => Number(n))
    const arr2 = String(num2).split("").map((n) => Number(n))
    return same(arr1, arr2);
}


// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }

function areThereDuplicates() {
    const freq = {};
    for (let i = 0; i < arguments.length; i++) {
        freq[arguments[i]] = (freq[arguments[i]] || 0) + 1;
        if (freq[arguments[i]] > 1) return true;
    }
    return false;
}
function main() {
    // console.log(same([1, 2, 3], [4, 1, 9]));
    // console.log(same([1, 2, 3], [1, 9]));
    // console.log(same([2, 3], [4, 9]));
    // console.log(same([1, 2, 4], [1]));
    // console.log(same([10], [100]));
    // console.log(same([4, 5, 6], [16, 25, 36]));

    // console.log(sameFrequency(182, 281))// true
    // console.log(sameFrequency(34, 14))// false
    // console.log(sameFrequency(3589578, 5879385)) // true
    // console.log(sameFrequency(22, 222))// false

    console.log(areThereDuplicates(1, 2, 3)) // false
    console.log(areThereDuplicates(1, 2, 2)) // true 
    console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 

}

main();
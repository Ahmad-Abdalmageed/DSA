function countUniqueValues(arr) {
    if (!arr.length) return 0;
    let res = 0;
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        right++;
        if (arr[right] !== arr[left]) {
            res++;
            left = right;
        }
    }
    return res;
}

function averagePair(arr, target) {
    if (!arr.length || arr.length < 2) return false;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let currentAvg = (arr[left] + arr[right]) / 2;
        if (currentAvg < target) {
            left++;
        } else if (currentAvg > target) {
            right--;
        } else {
            return true;
        }
    }
    return false;
}


function isSubsequence(str1, str2) {
    if(!str1) return true;
    let left = 0;
    let right = 0;

    while (right < str2.length) {
        while (str1[left] === str2[right] && left < str1.length) {
            left++;
            if (left >= str1.length) {
                return true;
            }
        }
        right++;
    }
    return false;
}

function main() {
    console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
    console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
    console.log(countUniqueValues([])) // 0
    console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4


    console.log(averagePair([1, 2, 3], 2.5)) // true
    console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))// true
    console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))// false
    console.log(averagePair([], 4))// false


    console.log(isSubsequence('hello', 'hello world')); // true
    console.log(isSubsequence('sing', 'sting')) // true
    console.log(isSubsequence('abc', 'abracadabra')) // true
    console.log(isSubsequence('abc', 'acb')) // false (order matters)

}

main();
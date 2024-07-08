function search(arr, item) {
    if (!arr.length) return -1;

    let left = 0;
    let right = arr.length;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === item) return mid;
        else if (item > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function countZeroes(arr) {
    let left = 0
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return arr.length - left;
}

function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    let mid;

    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === target) return mid;

        if (arr[mid] >= arr[left]) { // left half 
            if (arr[left] <= target && arr[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // right half
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

function sortedFrequency(arr, number) {

}

function main() {
    // console.log(search([1, 2, 4, 5, 6, 7, 8, 9, 10], 15));
    // console.log(search([1, 2, 4, 5, 6, 7, 8, 9, 10], 4));
    // console.log(search([1, 2, 4, 5, 6, 7, 8, 9, 10], 5));
    // console.log(search([1, 2, 4, 5, 6, 7, 8, 9, 10], 7));

    console.log(findRotatedIndex([3,4,1,2],4)) // 1
    console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
    console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
    console.log(findRotatedIndex([37,44,66,102,10,22],14) )// -1
    console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) )// -1
    console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)) // 5

    // countZeroes([1, 1, 1, 1, 0, 0]) // 2
    // countZeroes([1, 0, 0, 0, 0]) // 4
    // countZeroes([0, 0, 0]) // 3
    // countZeroes([1, 1, 1, 1]) // 0

    // sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) // 4 
    // sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) // 1 
    // sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) // 2 
    // sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) // -1


}

main();
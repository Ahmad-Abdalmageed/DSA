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

function main() {
    console.log(search([1,2,4,5,6,7,8,9,10], 15));
    console.log(search([1,2,4,5,6,7,8,9,10], 4));
    console.log(search([1,2,4,5,6,7,8,9,10], 5));
    console.log(search([1,2,4,5,6,7,8,9,10], 7));

}

main();
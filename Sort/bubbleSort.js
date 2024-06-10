function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr;
}

function bubbleSortOptimized(arr) {
    let noSwaps = true;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwaps = false
            }
        }
        if (sorted) break;
    }
    return arr;
}

function main() {
    console.log(bubbleSort([10, 12, 9, 8, 7, 1, 5, 2, 13]));
}

main();
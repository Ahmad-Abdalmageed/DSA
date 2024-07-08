function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}


function main() {
    console.log(insertionSort([10, 12, 9, 8, 7, 1, 5, 2, 13]));
}

main();
function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(arr, i, min);
        }
    }
    return arr;
}


function main() {
    console.log(insertionSort([10, 12, 9, 8, 7, 1, 5, 2, 13]));
}

main();
function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function pivot(arr, start, end) {
    let pivot = arr[end];
    let swapIdx = start - 1;
    for (let ptr = start; ptr < end; ptr++) {
        if (arr[ptr] <= pivot) {
            swapIdx++;
            swap(arr, swapIdx, ptr);
        }
    }
    swap(arr, swapIdx + 1, end);
    return swapIdx + 1;
}


function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;
    const pivotIdx = pivot(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
}

function main() {
    const arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];
    // let pivIdx1 = pivot(arr, 0, arr.length);
    // console.log(arr);
    // console.log(pivIdx1);
    // let pivIdx2 = pivot(arr, 0, pivIdx1 - 1);
    // console.log(arr);
    // console.log(pivIdx2);
    // let pivIdx3 = pivot(arr, 0, pivIdx2 - 1);
    // console.log(arr);
    // console.log(pivIdx3);

    console.log(quickSort(arr));
    console.log(arr)
}

main();
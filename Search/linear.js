function linearSearch(arr, target) {
    // add whatever parameters you deem necessary - good luck!
    let indx = 0;

    for (const val of arr) {
        if (val === target) {
            return indx;
        }
        indx += 1;
    }
    return -1;
}


function binarySearch(arr, target) {
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (arr[mid] === target) return mid;
        else if (target < arr[mid]) right = mid - 1;
        else if (target > arr[mid]) left = mid + 1;
    }
    return -1;
}
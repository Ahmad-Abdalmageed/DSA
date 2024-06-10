function maxSubArraySum(arr, n) {
    if (arr.length < n) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum
    for (let i = n; i < arr.length; i++) {
        tempSum += arr[i] - arr[i - n] // moving window, remove element from n places and add new 
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

function minSubArrayLen(arr, target) {
    let left = 0;
    let right = 0;

    let currSum = 0;
    let res = Infinity;
    while (left < arr.length) {
        if (right < arr.length && currSum < target) {
            currSum += arr[right];
            right++;
        }
        else if (currSum >= target) {
            res = Math.min(res, right - left);
            currSum -= arr[left];
            left++;
        }
        else {
            break;
        }
    }
    return res === Infinity ? 0 : res;

}

function findLongestSubstring(str) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let maxLen = 0;

    while (right < str.length) {
        while(set.has(str[right])){
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }
    return maxLen;
}


function main() {
    console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
    console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
    console.log(maxSubArraySum([4, 2, 1, 6], 1))
    console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
    console.log(maxSubArraySum([], 1))

    console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray
    console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest subarray
    console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> because [62] is greater than 52
    console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3
    console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
    console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
    console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0


    console.log(findLongestSubstring('')) // 0)
    console.log(findLongestSubstring('rithmschool')) // 7
    console.log(findLongestSubstring('thisisawesome')) // 6
    console.log(findLongestSubstring('thecatinthehat')) // 7
    console.log(findLongestSubstring('bbbbbb')) // 1
    console.log(findLongestSubstring('longestsubstring')) // 8
    console.log(findLongestSubstring('thisishowwedoit')) // 6

}

main();
function twoSum(nums, target) {
    const sumTable = {};
    for (let idx = 0; idx < nums.length; idx++) {
        const currentNumber = nums[idx];
        const complementNumber = target - currentNumber;
        if (sumTable[complementNumber] !== undefined) {
            return [idx, sumTable[complementNumber]];
        }
        sumTable[currentNumber] = idx;
    }
    return [-1, -1];
}

function main() {

    console.log(twoSum([3, 4, 5, 6], 7));
    console.log(twoSum([4, 5, 6], 10));
    console.log(twoSum([5, 5], 10));
}

main();
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestSequence = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) {
                length++;
            }
            longestSequence = Math.max(length, longestSequence);
        }
    }
    return longestSequence;

}


function main() {
    const nums = [2, 20, 4, 10, 3, 4, 5];
    console.log(longestConsecutive(nums));

}

main();
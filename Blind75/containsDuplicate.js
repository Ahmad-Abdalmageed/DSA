class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     const hash = {};
    //     for (const num of nums) {
    //         if (hash[num] !== undefined) {
    //             return true;
    //         }
    //         hash[num] = hash[num] + 1 || 0;
    //     }
    //     return false;
    // }
    hasDuplicate(nums) {
        const set = new Set();
        for (const num of nums) {
            if (set.has(num)) return true;
            set.add(num)
        }
        return false;
    }
}

function main() {
    console.log(new Solution().hasDuplicate([1, 2, 3, 4, 5, 6, 6]));
}

main();
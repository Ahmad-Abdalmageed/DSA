function topKFrequent(nums, k) {
    const freqMap = {}
    for (const num of nums) {
        freqMap[num] = (freqMap[num] + 1) || 1;
    }
    const freqArray = Array.from({ length: nums.length + 1 }, () => []);
    for (const num in freqMap) {
        freqArray[freqMap[num]].push(num);
    }
    const res = [];
    for (let i = freqArray.length - 1; i > 0; i--) {
        for (const num of freqArray[i]) {
            res.push(num);
            if (res.length === k) return res;
        }
    }
}


function main() {
    console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
    console.log('SOLVED');
}

main();
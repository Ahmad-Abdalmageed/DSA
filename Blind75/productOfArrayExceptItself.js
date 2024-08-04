function productExceptSelf(nums) {
    // DIVISION APPROACH
    // let totalMultiplication = 1;
    // for (const num of nums) {
    //     totalMultiplication *= num;
    // }
    // const newRes = [];
    // for (const num of nums) {
    //     newRes.push(totalMultiplication / num);
    // }
    // return newRes;
    let prefix = 1;
    let postfix = 1;
    const res = [];

    for(let i = 0; i < nums.length; i++){
        res[i] = prefix;
        prefix *= nums[i];
    }
    for(let i = nums.length - 1; i >= 0; i--){
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
}


function main() {
    const arr = [1, 2, 4, 6];
    const nums = [-1, 0, 1, 2, 3]
    console.log(productExceptSelf(arr));
    console.log(productExceptSelf(nums))
}

main();
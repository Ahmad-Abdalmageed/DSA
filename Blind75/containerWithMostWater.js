function maxArea(heights) {
    let i = 0;
    let j = heights.length - 1;
    let result = 0;

    while (i < j) {
        let axisLength = j - i;
        const currentArea = axisLength * Math.min(heights[i], heights[j]);
        result = Math.max(currentArea, result);
        if (heights[i] < heights[j]) i++;
        else j--;
    }
    return result;

}

function main() {
    const height = [1, 7, 2, 5, 4, 7, 3, 6];
    console.log(maxArea(height));
    console.log(maxArea([1, 1]));
    console.log(maxArea([1,8,6,2,5,4,8,3,7]));


}

main();
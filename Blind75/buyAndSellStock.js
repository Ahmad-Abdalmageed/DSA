function maxProfit(prices) {
    let i = 0;
    let j = 0;
    let profit = 0;

    while (j < prices.length) {
        profit = Math.max(profit, prices[j] - prices[i]);
        if (prices[j] < prices[i]) i = j;
        j++;
    }
    return profit;
}


function main() {
    const prices = [10, 1, 5, 6, 7, 1];
    console.log(maxProfit(prices));
    console.log(maxProfit([10, 8, 7, 5, 2]));
    console.log(maxProfit([7, 1, 5, 3, 6, 4]));
    console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]))

}

main();
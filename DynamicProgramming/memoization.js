function fibonacci(n) {
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemo(n){
    const memo = [];

    function fib(n){
        if(n <= 2) return 1;
        if(memo[n] !== undefined) return memo[n];
        memo[n] = fib(n-1) - fib(n-2);
        return memo[n];
    }
    return fib(n);
}

function main() {
    console.time('RECURSIVE')
    console.log(fibonacci(45));
    console.timeEnd('RECURSIVE');

    console.time('MEMO')
    console.log(fibonacciMemo(45));
    console.timeEnd('MEMO');

       
}

main();
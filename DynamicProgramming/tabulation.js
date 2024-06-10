function fibonacci(n) {
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2);
}


function fiboncciTabulated(n) {
    if (n <= 2) return 1;
    const fib = [0, 1, 1];
    for (let sequence = 3; sequence <= n; sequence++) {
        fib[sequence] = fib[sequence - 1] + fib[sequence - 2];
    }
    return fib[n];
}

function main() {
    console.time('RECURSIVE')
    console.log(fibonacci(45));
    console.timeEnd('RECURSIVE');

    console.time('MEMO')
    console.log(fiboncciTabulated(45));
    console.timeEnd('MEMO');


}

main();
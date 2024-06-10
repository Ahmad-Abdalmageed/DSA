function fibonacci(n) {
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function main() {
    console.log(fibonacci(3));
    console.log(fibonacci(4));
    console.log(fibonacci(5));
    console.log(fibonacci(7));
    console.log(fibonacci(8));
    console.log(fibonacci(9));
}

main();
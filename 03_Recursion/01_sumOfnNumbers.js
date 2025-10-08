function printSum(n) {
    if (n == 0) return 0;
    return n + printSum(n - 1);
}

console.log(printSum(5));
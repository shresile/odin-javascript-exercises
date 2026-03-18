const fibonacci = function(input) {
    if (+input === 0) {
        return 0;
    } else if (+input < 0) {
        return "OOPS";
    }
    let index = +input - 1;
    let fibonacciArr = [1, 1];
    for (i = 2; i <= index; i++) {
        fibonacciArr[i] = fibonacciArr[i-2] + fibonacciArr[i-1];
    }
    return fibonacciArr[index];
};

// Do not edit below this line
module.exports = fibonacci;

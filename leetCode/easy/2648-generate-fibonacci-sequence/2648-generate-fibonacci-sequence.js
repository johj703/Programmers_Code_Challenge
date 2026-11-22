/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let currentValue = 0;
    let nextFibonacciValue = 1;

    while (true) {
        yield currentValue;
        [currentValue, nextFibonacciValue] = [
            nextFibonacciValue,
            currentValue + nextFibonacciValue,
        ];
    }
};

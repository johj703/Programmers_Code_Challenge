/**
 * @param {number} n
 * @return {Function}
 */
var createCounter = function (n) {
    let currentCount = n;
    return function () {
        return currentCount++;
    };
};

const counter = createCounter(10);
console.log(counter()); // expected: 10
console.log(counter()); // expected: 11
console.log(counter()); // expected: 12

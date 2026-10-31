/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        let currentValue = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            currentValue = functions[i](currentValue);
        }
        return currentValue;
    };
};
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let currentValue = init;

    return {
        increment: function () {
            return ++currentValue;
        },
        decrement: function () {
            return --currentValue;
        },
        reset: function () {
            currentValue = init;
            return currentValue;
        },
    };
};
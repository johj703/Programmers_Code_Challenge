/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let accumulatedValue = init;

    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        accumulatedValue = fn(accumulatedValue, nums[currentIndex]);
    }

    return accumulatedValue;
};
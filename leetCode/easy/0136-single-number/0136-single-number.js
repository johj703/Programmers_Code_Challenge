/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let accumulator = 0;

    for (let index = 0; index < nums.length; index += 1) {
        accumulator ^= nums[index];
    }

    return accumulator;
};
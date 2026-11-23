/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length;

    while (leftIndex < rightIndex) {
        const middleIndex =
            leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        if (nums[middleIndex] < target) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex;
        }
    }

    return leftIndex;
};
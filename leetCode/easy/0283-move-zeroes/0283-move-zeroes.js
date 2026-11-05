/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let nextNonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        // 불변식: nextNonZeroIndex 앞쪽에는 0이 아닌 원소들이 순서대로 모여 있고,
        // nextNonZeroIndex와 i 사이에는 0들만 존재한다.
        if (nums[i] !== 0) {
            // index가 다를 때만 교환하여 자기 자신과의 무의미한 쓰기를 방지한다.
            if (i !== nextNonZeroIndex) {
                const nonZeroValue = nums[i];
                nums[i] = nums[nextNonZeroIndex];
                nums[nextNonZeroIndex] = nonZeroValue;
            }
            nextNonZeroIndex++;
        }
    }
};
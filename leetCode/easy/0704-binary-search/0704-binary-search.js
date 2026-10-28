/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0; // 탐색 범위의 시작 index
    let right = nums.length - 1; // 탐색 범위의 끝 index

    while (left <= right) {
        // 소수점 아래를 버려 정수 index mid를 구함
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1; // target이 크면 왼쪽 범위를 버림
        } else {
            right = mid - 1; // target이 작으면 오른쪽 범위를 버림
        }
    }

    return -1; // 끝내 찾지 못할 경우
};
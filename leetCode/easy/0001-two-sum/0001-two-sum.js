/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 1. 빈 Map(해시 맵)을 생성
    const numMap = new Map();

    // 2. 배열을 앞에서부터 딱 한 번만 순회(Single Pass)
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];

        // 현재 숫자 x와 더해서 target을 만들 수 있는 짝(complement) 계산
        const complement = target - x;

        // 만약 내가 찾는 짝이 이미 해시 맵에 저장되어 있다면 정답을 찾은 것
        if (numMap.has(complement)) {
            // 과거에 저장해 둔 짝의 index(numMap.get)와 현재 나의 index(i)를 배열로 즉시 반환
            return [numMap.get(complement), i];
        }

        /* 짝이 없다면 다음 숫자들이 나를 짝으로 찾을 수 있도록
        key에는 '현재 숫자 값(x)'을, value에는 '현재 index(i)'를 저장 */
        numMap.set(x, i);
    }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // 존재 여부만 확인하는 Set 생성
    const seenNumbers = new Set();

    // 배열을 앞에서부터 딱 한 번만 순회(single pass)
    for (let currentNumber of nums) {
        // 현재 숫자가 이미 Set에 들어있는지 먼저 조사
        if (seenNumbers.has(currentNumber)) {
            // 과거에 한 번 만났던 중복 원소이므로 즉시 true를 반환하고 조기 종료
            return true;
        }
        // Set에 없다면, 다음 숫자들이 대조해 볼 수 있도록 저장
        seenNumbers.add(currentNumber);
    }
    // 끝까지 갔으면 중복이 없으므로 false를 반환
    return false;
};

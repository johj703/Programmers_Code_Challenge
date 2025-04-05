function solution(array) {
    // 1. 배열을 오름차순으로 정렬.
    // sort 메서드에 (a, b) = a - b 비교 함수를 전달해서 숫자를 올바르게 정렬.
    // 2. 배열의 중간 index에 위치한 요소를 반환.
    // Math.floor(array.length / 2)는 배열 길이의 절반을 내림해서 중간 요소의 index를 계산
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
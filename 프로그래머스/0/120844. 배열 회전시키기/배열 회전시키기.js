function solution(numbers, direction) {
    // 오른쪽으로 회전하는 경우
    if(direction === 'right'){
        // 배열의 마지막 요소를 제거하고(pop), 그 요소를 배열의 제일 앞에 추가(unshift).
        // [1, 2, 3, 4] -> [4, 1, 2, 3]
        numbers.unshift(numbers.pop())
    // 왼쪽으로 회전하는 경우
    } else {
        // 배열의 첫 번째 요소를 제거하고(shift), 그 요소를 배열의 제일 뒤에 추가(push).
        // [1, 2, 3, 4] -> [2, 3, 4, 1]
        numbers.push(numbers.shift())
    }
    // 회전된 배열을 반환
    return numbers
}
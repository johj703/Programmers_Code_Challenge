function solution(numbers, num1, num2) {
    let answer = [];
    // slice 메서드로 배열의 일부분을 추출
    // slice(시작 index, 끝 index+1)로 사용
    // 끝 index는 포함되지 않으므로 num2+1로 사용
    answer = numbers.slice(num1, num2+1);
    return answer;
}
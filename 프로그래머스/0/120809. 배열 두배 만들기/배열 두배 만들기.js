function solution(numbers) {
    var answer = [];
    // map 메서드를 사용해서 배열의 각 요소에 2를 곱하기
    // x는 numbers 배열의 각 요소를 의미
    answer = numbers.map(x => x*2)
    return answer;
}
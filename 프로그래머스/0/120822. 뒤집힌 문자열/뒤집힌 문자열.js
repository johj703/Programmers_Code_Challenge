function solution(my_string) {
    // 1. [...my_string]: 문자열을 개별 문자의 배열로 변환
    // spread 문법을 사용해서 문자열의 각 문자를 배열 요소로 분리
    // 2. .reverse(): 배열의 순서를 뒤집기
    // 3. .join(): 배열의 모든 요소를 빈 문자열('')로 연결해서 하나의 문자열로 만들기
    return [...my_string].reverse().join('');
}
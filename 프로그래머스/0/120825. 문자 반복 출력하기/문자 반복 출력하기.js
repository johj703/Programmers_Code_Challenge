function solution(my_string, n) {
    return [...my_string]   // 문자열을 개별 문자 배열로 변환
        .map(char => char.repeat(n))    // 각 문자를 n번 반복
        .join('');  // 반복된 문자들을 하나의 문자열로 합치기
}
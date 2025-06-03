function solution(my_string) {
        // my_string을 spread 연산자로 문자열을 배열로 분해 후 toLowerCase로 모든 문자열을 소문자로 변환   
    return [...my_string.toLowerCase()]
        // 배열을 알파벳 순으로 정렬
        .sort()
        // 배열의 문자들을 다시 하나의 문자열로 결합
        .join("");
}
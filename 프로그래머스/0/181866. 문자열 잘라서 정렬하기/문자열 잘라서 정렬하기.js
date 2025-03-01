function solution(myString) {
    return myString
        .split('x')     // 문자열을 'x'를 기준으로 분리
        .filter(a => a !== "")      // 빈 문자열("")을 제거
        .sort();        // 알파벳 순으로 정렬
}
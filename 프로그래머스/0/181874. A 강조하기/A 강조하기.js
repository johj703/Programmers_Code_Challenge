function solution(myString) {
    return myString
        .toLowerCase() // 먼저 모든 문자를 소문자로 변환
        .replace(/a/g, "A"); // 모든 'a'를 'A'로 변환
        // /a/g에서:
        // a는 찾을 문자
        // g는 전역 검색(모든 a를 찾음)
}
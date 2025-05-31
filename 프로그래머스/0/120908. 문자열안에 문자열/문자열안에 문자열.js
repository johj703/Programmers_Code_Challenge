function solution(str1, str2) {
    // 삼항 연산자를 사용하여 조건에 따라 다른 값을 반환
    // str1.includes(str2) => str1 문자열에 str2가 포함되어 있는지 확인
    // includes() 메서드는 포함되어 있으면 true, 없으면 false를 반환
    // true인 경우 1을 반환, false인 경우 2를 반환
    return str1.includes(str2) ? 1 : 2;
}
function solution(myString) {
    return myString
        .split("x") // 문자열을 'x'를 기준으로 분리
        .map(a => a.length);    // 각 부분 문자열의 길이를 계산
}
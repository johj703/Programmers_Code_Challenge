function solution(my_string) {
    // 1. 문자열을 공백(" ")을 기준으로 분리
    // 2. filter(v => v)로 빈 문자열을 제거
    //  - JavaScript에서 빈 문자열("")은 falsy한 값으로 처리됨
    //  - 따라서 v가 빈 문자열이면 false로 평가되어서 제외됨
    const words = my_string.split(" ").filter(v => v);
    return words;
}
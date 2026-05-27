function solution(n, t, m, p) {
    // 1. n진수 문자열 생성
    let nums = '';
    let num = 0;

    // t * m 이상의 문자열 생성 (충분한 길이)
    while (nums.length < t * m) {
        nums += num.toString(n).toUpperCase(); // n진수 변환 + 대문자
        num++;
    }

    // 2. p번째 사람(튜브)이 말해야 하는 숫자 추출
    let result = '';

    // p-1 index부터 m 간격으로 t개 추출
    for (let i = p - 1; i < nums.length && result.length < t; i += m) {
        result += nums[i];
    }

    return result;
}
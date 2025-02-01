function solution(arr, intervals) {
    // intervals 배열을 구조분해할당으로 [a, b]와 [c, d]로 분리
    const [[a, b], [c, d]] = intervals;
    // 스프레드 연산자(...)를 사용해서
    // 1. arr.slice(a, b + 1): 첫 번째 구간(a부터 b까지) 추출
    // 2. arr.slice(c, d + 1): 두 번째 구간(c부터 d까지) 추출
    // 3. 두 구간을 하나의 배열로 합치기
    return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}
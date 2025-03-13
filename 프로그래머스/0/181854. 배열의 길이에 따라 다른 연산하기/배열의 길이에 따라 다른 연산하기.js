function solution(arr, n) {
    // 배열 길이가 짝수인 경우
    if(arr.length % 2 === 0) {
        // 홀수 index(1, 3, 5...)에만 n을 더하기
        return arr.map((a, i) => i % 2 !== 0 ? a + n : a);
    // 배열 길이가 홀수인 경우
    } else {
        // 짝수 index(0, 2, 4...)에만 n을 더하기
        return arr.map((a, i) => i % 2 === 0 ? a + n : a);;
    }
}
function solution(arr, k) {
    // k가 홀수인 경우
    if(k % 2 === 1) {
        // 배열의 각 요소에 k를 곱하기
        return arr.map(el => el * k);
    // k가 짝수인 경우
    } else if(k % 2 === 0) {
        // 배열의 각 요소에 k를 더하기
        return arr.map(el => el + k);
    // 그 외의 경우 (이 부분은 실행되지 않는다. k는 항상 홀수 또는 짝수이기 때문)
    } else false
}
function solution(arr) {
    // 배열의 각 원소에 대해 조건에 따라 변환합니다.
    return arr.map(a => {
        // 50 이상이고 짝수인 경우 2로 나눈다.
        if(a >= 50 && a % 2 === 0) return Math.floor(a/2);
        // 50 미만이고 홀수인 경우 2를 곱한다.
        if(a < 50 && a % 2 === 1) return a*2;
        // 위 조건에 해당하지 않는 경우 원래 값을 유지한다.
        return a;
    });
}
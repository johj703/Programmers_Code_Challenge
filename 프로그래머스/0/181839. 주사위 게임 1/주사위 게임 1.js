function solution(a, b) {
    // 두 수 모두 홀수인 경우
    if(a%2 !== 0 && b%2 !== 0){
        // a의 제곱과 b의 제곱의 합을 반환
        return a*a + b*b;
    // 두 수 중 하나만 홀수인 경우
    } else if(a%2 !== 0 || b%2 !== 0){
        // (a + b)에 2를 곱한 값을 반환
        return 2*(a + b);
    // 두 수 모두 짝수인 경우
    } else {
        // a와 b의 차이의 절대값을 반환
        return Math.abs(a - b);
    }
}
function solution(n) {
    let ans = 0;

    // N에서 0으로 역방향으로 생각
    while (n > 0) {
        if (n % 2 === 1) {
            // 홀수면 점프 (건전지 1 사용)
            ans++;
            n--;
        } else {
            // 짝수면 순간이동 (건전지 0 사용)
            // 역방향: 2로 나누기
            n /= 2;
        }
    }
    return ans;
}
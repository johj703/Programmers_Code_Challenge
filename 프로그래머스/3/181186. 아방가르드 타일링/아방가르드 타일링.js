function solution(n) {
    // 나누어 줄 나머지 상수 정의
    const MOD = 1000000007;

    // 기저 조건 (1항부터 6항까지 브루트포스로 구한 실측 고정값)
    const base = [0, 1, 3, 10, 23, 62, 170];

    // n이 6 이하인 경우 점화식을 돌릴 필요 없이 즉시 결과 변환
    if (n <= 6) {
        return base[n];
    }

    // DP 테이블 생성 및 기저 조건 채우기
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= 6; i++) {
        dp[i] = base[i];
    }

    // 7번째 항부터 n번째 항까지 O(N)으로 점화식 순회 처리
    for (let i = 7; i <= n; i++) {
        // 점화식 대입
        // dp(n) = dp(n - 1) + 2*dp(n - 2) + 6*dp(n - 3) + dp(n - 4) - dp(n - 6)
        let nextValue =
            (dp[i - 1] +
                2 * dp[i - 2] +
                6 * dp[i - 3] +
                dp[i - 4] -
                dp[i - 6]) %
            MOD;

        // 자바스크립트 음수 나머지 연산 보정 예외 처리
        // 빼기 연산(-dp[i - 6]) 때문에 음수가 나왔다면 MOD를 더해 양수로 변환
        if (nextValue < 0) {
            nextValue = (nextValue + MOD) % MOD;
        }

        dp[i] = nextValue;
    }
    // n번째 타일링의 최종 경우의 수 반환
    return dp[n];
}
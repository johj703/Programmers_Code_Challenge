function solution(n, money) {
    const MOD = 1000000007;

    // ----- dp[i] = 금액 i를 만드는 방법의 수, dp[0] = 1(아무것도 안 쓰는 경우 1가지) -----
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    // ----- 화폐 종류를 바깥에서, 금액을 안쪽에서(오름차순) 순회 -----
    for (const coin of money) {
        for (let amount = coin; amount <= n; amount++) {
            dp[amount] = (dp[amount] + dp[amount - coin]) % MOD;
        }
    }
    return dp[n];
}
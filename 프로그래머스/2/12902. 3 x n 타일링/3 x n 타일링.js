function solution(n) {
    const MOD = 1000000007;

    // n이 홀수면 채울 수 없음
    if (n % 2 === 1) return 0;

    // f(0) = 1, f(2) = 3
    if (n === 2) return 3;

    let prev2 = 1; // f(0)
    let prev1 = 3; // f(2)

    for (let i = 4; i <= n; i += 2) {
        const curr = (((4 * prev1) % MOD) - prev2 + MOD) % MOD; // f(n) = 4*f(n-2) - f(n-4)
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
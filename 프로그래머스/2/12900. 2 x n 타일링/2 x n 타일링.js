function solution(n) {
    const MOD = 1000000007;

    if (n === 1) return 1;
    if (n === 2) return 2;

    let prev2 = 1; // f(1)
    let prev1 = 2; // f(2)

    for (let i = 3; i <= n; i++) {
        const curr = (prev1 + prev2) % MOD;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
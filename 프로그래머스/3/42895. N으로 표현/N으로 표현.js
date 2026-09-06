function solution(N, number) {
    const dp = Array.from({ length: 9 }, () => new Set()); // dp[1] - dp[8] 사용, dp[0]은 미사용
    for (let k = 1; k <= 8; k++) {
        // 방법 1: N을 k번 이어붙인 숫자
        const concatValue = Number(String(N).repeat(k));
        dp[k].add(concatValue);

        // 방법 2: k = i + (k - i)로 나눠서 두 집합의 값들을 사칙연산으로 조합
        for (let i = 1; i < k; i++) {
            for (const a of dp[i]) {
                for (const b of dp[k - i]) {
                    dp[k].add(a + b);
                    dp[k].add(a - b);
                    dp[k].add(a * b);
                    if (b !== 0) dp[k].add(Math.floor(a / b)); // 나머지는 무시(정수 나눗셈)
                }
            }
        }

        // 이번 k로 number를 만들 수 있으면 바로 반환
        if (dp[k].has(number)) return k;
    }
    return -1; // 8번까지 사용해도 못 만들면 -1
}
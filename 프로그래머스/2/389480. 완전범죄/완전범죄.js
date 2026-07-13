function solution(info, n, m) {
    const INF = Infinity;

    // dp[a] = A의 흔적이 a개일 때 B의 최소 흔적
    let dp = new Array(n).fill(INF);
    dp[0] = 0; // 초기: A흔적 0, B흔적 0

    for (const [traceA, traceB] of info) {
        const newDp = new Array(n).fill(INF);

        for (let a = 0; a < n; a++) {
            if (dp[a] === INF) continue; // 도달 불가능한 상태는 skip

            // A가 훔치는 경우: A흔적 증가
            const nextA = a + traceA;
            if (nextA < n) {
                newDp[nextA] = Math.min(newDp[nextA], dp[a]);
            }

            // B가 훔치는 경우: B흔적 증가
            const nextB = dp[a] + traceB;
            if (nextB < m) {
                newDp[a] = Math.min(newDp[a], nextB);
            }
        }

        dp = newDp;
    }

    // A흔적이 가장 적으면서 B흔적도 m 미만인 경우 찾기
    for (let a = 0; a < n; a++) {
        if (dp[a] < m) return a;
    }

    return -1;
}
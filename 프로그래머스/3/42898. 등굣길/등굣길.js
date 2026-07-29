function solution(m, n, puddles) {
    const MOD = 1000000007;

    // ----- 물웅덩이 좌표를 빠르게 확인하기 위한 Set -----
    // "x, y" 형태의 문자열 키로 저장
    const puddleSet = new Set(puddles.map(([x, y]) => `${x}, ${y}`));

    // ----- DP 테이블 초기화: dp[x][y] = (x, y)까지의 경로 수 -----
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    // ----- 집(1, 1)은 시작점이므로 경로 수 1 (물 웅덩이가 아니라고 보장됨) -----
    dp[1][1] = 1;

    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= m; x++) {
            if (x === 1 && y === 1) continue; // 시작점은 이미 처리함

            // ----- 물웅덩이 칸은 지나갈 수 없으므로 경로 수 0 -----
            if (puddleSet.has(`${x}, ${y}`)) {
                dp[y][x] = 0;
                continue;
            }

            // ----- 왼쪽 칸 + 위쪽 칸에서 오는 경로 수를 더함(나머지 연산 유지) -----
            dp[y][x] = (dp[y][x - 1] + dp[y - 1][x]) % MOD;
        }
    }

    return dp[n][m];
}
function solution(n, s, a, b, fares) {
    const INF = Infinity;

    // ----- 1. 최단거리 테이블 초기화 -----
    const dist = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(INF),
    );
    for (let i = 1; i <= n; i++) dist[i][i] = 0; // 자기 자신까지 거리는 0

    // ----- 2. 주어진 요금 정보를 테이블에 반영(양방향) -----
    for (const [c, d, f] of fares) {
        dist[c][d] = f;
        dist[d][c] = f;
    }

    // ----- 3. 플로이드-워셜: 모든 쌍의 최단거리 계산 -----
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // ----- 4. "헤어지는 지점 p"를 n-1까지 전부 시도하며 최소 비용 탐색 -----
    let minCost = INF;

    for (let p = 1; p <= n; p++) {
        const cost = dist[s][p] + dist[p][a] + dist[p][b];
        if (cost < minCost) minCost = cost;
    }

    return minCost;
}
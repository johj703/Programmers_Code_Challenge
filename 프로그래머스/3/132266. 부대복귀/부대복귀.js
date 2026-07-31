function solution(n, roads, sources, destination) {
    // ----- 1. 인접리스트 구성(양방향) -----
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of roads) {
        adj[a].push(b);
        adj[b].push(a);
    }

    // ----- 2. destination을 시작점으로 BFS, 모든 지역까지의 최단 거리 계산 -----
    const distance = new Array(n + 1).fill(-1); // -1 = 아직 방문 안 함(도달 불가 후보)
    distance[destination] = 0;

    const queue = [destination];
    let head = 0; // shift() 대신 head 포인터로 큐 처리(성능 최적화)

    while (head < queue.length) {
        const current = queue[head++];

        for (const next of adj[current]) {
            if (distance[next] === -1) {
                // 아직 방문 안 한 지역이면
                distance[next] = distance[current] + 1;
                queue.push(next);
            }
        }
    }

    // ----- 3. sources 순서대로 결과 조회 -----
    return sources.map((source) => distance[source]);
}
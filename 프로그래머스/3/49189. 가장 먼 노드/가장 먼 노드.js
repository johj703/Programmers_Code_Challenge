function solution(n, vertex) {
    // ----- 1. 인접리스트 구성(양방향) -----
    const adj = Array.from({ length: n + 1 }, () => []); // 1번 노드부터 시작하므로 n+1 크기
    for (const [a, b] of vertex) {
        adj[a].push(b);
        adj[b].push(a);
    }

    // ----- 2. 1번 노드를 시작점으로 BFS, 모든 노드끼자의 최단 거리 계산 -----
    const distance = Array(n + 1).fill(-1); // -1로 초기화, 방문하지 않은 노드 표시
    distance[1] = 0; // 시작점 1번 노드의 거리는 0

    const queue = [1]; // BFS를 위한 큐 초기화
    let head = 0; // shift() 대신 head 포인터로 큐 처리(성능 최적화)

    while (head < queue.length) {
        const current = queue[head++]; // 큐에서 현재 노드 꺼내기
        for (const neighbor of adj[current]) {
            if (distance[neighbor] === -1) {
                // 아직 방문하지 않은 노드라면
                distance[neighbor] = distance[current] + 1; // 거리 업데이트
                queue.push(neighbor); // 큐에 추가
            }
        }
    }

    // ----- 3. 최대값을 찾고, 그 최대값을 가진 노드의 개수 세기 -----
    const maxDistance = Math.max(...distance.slice(1)); // 0번 index(더미)는 제외

    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (distance[i] === maxDistance) count++;
    }
    return count; // 최종 결과 반환
}
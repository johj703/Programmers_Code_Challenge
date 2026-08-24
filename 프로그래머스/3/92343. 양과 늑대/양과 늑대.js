function solution(info, edges) {
    const n = info.length;

    // 부모 -> 자식 리스트로 트리 구성
    const children = Array.from({ length: n }, () => []);
    for (const [parent, child] of edges) {
        children[parent].push(child);
    }

    let answer = 0;

    // visited: 현재까지 방문한 노드 여부
    // sheepCount, wolfCount: 현재까지 모은 양/늑대 수
    function dfs(visited, sheepCount, wolfCount) {
        // 매 시점마다 현재까지 모은 양의 수로 답을 갱신
        answer = Math.max(answer, sheepCount);

        // 이미 방문한 노드들의 자식 중, 아직 방문하지 않은 노드가 다음 이동 후보
        for (let i = 0; i < n; i++) {
            if (!visited[i]) continue;

            for (const child of children[i]) {
                if (visited[child]) continue;

                const nextSheep = sheepCount + (info[child] === 0 ? 1 : 0);
                const nextWolf = wolfCount + (info[child] === 1 ? 1 : 0);

                // 늑대 수가 양 수와 같거나 많아지면 양이 전부 잡아 먹히므로 이 경로는 포기
                if (nextSheep <= nextWolf) continue;

                visited[child] = true;
                dfs(visited, nextSheep, nextWolf);
                visited[child] = false; // 백트래킹: 다른 경로를 시도하기 위해 상태 복원
            }
        }
    }

    const visited = new Array(n).fill(false);
    visited[0] = true; // 루트 노드는 항상 양이므로 시작 시점에 방문 처리
    dfs(visited, 1, 0); // 루트에서 양 1마리, 늑대 0마리로 시작

    return answer;
}
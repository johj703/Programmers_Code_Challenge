function solution(n, infection, edges, k) {
    // ----- 1. 타입별 인접리스트 구성 -----
    // adj[type][node] = 해당 타입 파이프로 연결된 이웃 노드들
    const adj = {
        1: Array.from({ length: n + 1 }, () => []),
        2: Array.from({ length: n + 1 }, () => []),
        3: Array.from({ length: n + 1 }, () => []),
    };

    for (const [x, y, type] of edges) {
        adj[type][x].push(y);
        adj[type][y].push(x);
    }

    // ----- 2. 초기 감염 상태 -----
    const initInfected = new Array(n + 1).fill(false);
    initInfected[infection] = true;

    let maxInfected = 1;

    // ----- 3. 특정 타입 파이프를 열었을 때 감염 전파 (플러드필) -----
    const floodFill = (type, infectedArr) => {
        const newInfected = infectedArr.slice(); // 원본 훼손 방지
        const stack = [];

        // 현재 감염된 모든 노드를 시작점으로 등록
        for (let i = 1; i <= n; i++) {
            if (infectedArr[i]) stack.push(i);
        }

        // 같은 타입 간선을 타고 계속 전파 (체인 전체 감염)
        while (stack.length) {
            const node = stack.pop();
            for (const neighbor of adj[type][node]) {
                if (!newInfected[neighbor]) {
                    newInfected[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }

        return newInfected;
    };

    // ----- 4. 감염자 수 세기 -----
    const countInfected = (arr) => {
        let count = 0;
        for (let i = 1; i <= n; i++) if (arr[i]) count++;
        return count;
    };

    // ----- 5. DFS로 모든 타입 순서 조합 시도 -----
    const dfs = (depth, infectedArr) => {
        const count = countInfected(infectedArr);
        if (count > maxInfected) maxInfected = count;

        // 종료 조건: k번 다 썼거나 이미 전부 감염됨
        if (depth === k || count === n) return;

        // A(1), B(2), C(3) 순서로 각각 시도
        for (let type = 1; type <= 3; type++) {
            const newInfected = floodFill(type, infectedArr);
            dfs(depth + 1, newInfected);
        }
    };

    dfs(0, initInfected);
    return maxInfected;
}
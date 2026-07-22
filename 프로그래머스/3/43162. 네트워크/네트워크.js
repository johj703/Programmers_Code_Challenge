function solution(n, computers) {
    // ----- 1. 초기화: 각자 자기 자신을 부모로 설정 -----
    const parent = Array.from({ length: n }, (_, i) => i);

    // ----- 2. find: 루트(대표) 찾기 + 경로 압축 -----
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // 경로 압축
        }
        return parent[x];
    };

    // ----- 3. union: 두 그룹을 하나로 합침 -----
    const union = (a, b) => {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA !== rootB) {
            parent[rootB] = rootA;
        }
    };

    // ----- 4. 연결 정보(computer) 순회하며 union 수행 -----
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (computers[i][j] === 1) {
                union(i, j);
            }
        }
    }

    // ----- 5. 서로 다른 루트(대표)의 개수 = 네트워크 개수 -----
    const roots = new Set();
    for (let i = 0; i < n; i++) {
        roots.add(find(i));
    }

    return roots.size;
}
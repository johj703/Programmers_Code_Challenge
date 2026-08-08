function solution(n, costs) {
    // ----- 1. Union-Find 초기화 -----
    const parent = Array.from({ length: n }, (_, i) => i); // 부모 배열 초기화

    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // 경로 압축
        }
        return parent[x];
    };

    const union = (a, b) => {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA !== rootB) {
            parent[rootB] = rootA; // 한쪽을 다른 쪽의 부모로 연결
            return true; // "서로 다른 그룹이었어서 합쳤다"는 성공 신호
        }
        return false; // "이미 같은 그룹이어서 합치지 않았다"는 실패 신호(사이클)
    };

    // ----- 2. 다리(간선)를 비용 오름차순으로 정렬 -----
    const sortedCosts = [...costs].sort((a, b) => a[2] - b[2]);

    // ----- 3. 비용이 작은 순서대로, 사이클을 만들지 않는 다리만 선택 -----
    let totalCost = 0;

    for (const [a, b, cost] of sortedCosts) {
        if (union(a, b)) {
            totalCost += cost; // 다리를 선택했으므로 비용 누적
        }
    }
    return totalCost;
}
function solution(n, lighthouse) {
    // 트리를 양방향 인접 리스트로 구성 (뱃길은 방향이 없으므로 양쪽 다 등록)
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of lighthouse) {
        graph[a].push(b);
        graph[b].push(a);
    }

    /*
      트리 DP를 하려면 "자식을 먼저 계산한 뒤 부모를 계산"해야 하는데,
      이 순서(리프 -> 루트)를 만들기 위해 아래 4개를 준비한다.
      - parent: 각 노드의 부모가 누구인지 (루트는 부모가 없으므로 0으로 둠)
      - order: 노드를 방문한 순서를 기록해두고, 이후 이 배열을 거꾸로 순회하면
               자식이 항상 부모보다 먼저 처리된 상태를 얻을 수 있음
      - visited: 같은 노드를 중복 방문하지 않기 위한 체크 배열
      - stack: 반복문 기반으로 DFS를 수행하기 위한 스택. 1번 노드를 임의로 루트로 삼아 시작함
               (재귀로 짜면 트리가 한쪽으로 길게 늘어질 때 스택 오버플로우 위험이 있어 반복문으로 구현)
    */
    const parent = new Array(n + 1).fill(0);
    const order = [];
    const visited = new Array(n + 1).fill(false);
    const stack = [1];
    visited[1] = true;

    // 반복문 기반 스택으로 방문 숫서를 기록해, 나중에 역순(리프 -> 루트)으로 DP 채움
    while (stack.length > 0) {
        const node = stack.pop();
        order.push(node);
        for (const next of graph[node]) {
            if (!visited[next]) {
                visited[next] = true;
                parent[next] = node;
                stack.push(next);
            }
        }
    }

    const dpOff = new Array(n + 1).fill(0); // 이 노드를 선택 안 했을 때의 최소 커버 크기
    const dpOn = new Array(n + 1).fill(1); // 이 노드를 선택했을 때의 최소 커버 크기(자기 자신 포함이므로 초기값 1)

    for (let i = order.length - 1; i >= 0; i--) {
        const node = order[i];
        for (const child of graph[node]) {
            if (child === parent[node]) continue;
            dpOff[node] += dpOn[child]; // 부모를 안 켜면, 부모-자식 간선을 위해 자식은 반드시 켜야 함.
            dpOn[node] += Math.min(dpOff[child], dpOn[child]); // 부모를 켜면, 자식은 더 유리한 쪽을 자유롭게 선택
        }
    }

    return Math.min(dpOff[1], dpOn[1]);
}
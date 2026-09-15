function solution(a, edges) {
    const n = a.length;

    // 전체 가중치 합이 0이 아니면 애초에 불가능
    const totalSum = a.reduce((sum, v) => sum + v, 0);
    if (totalSum !== 0) return -1;

    // 트리를 양방향 인접 리스트로 구성
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    /*
        리프 -> 루트 순서로 서브트리 합을 계산하기 위해, 반복문 기반 스택으로 방문 순서(order)와
        부모(parent) 정보를 먼저 구한다. n이 최대 30만이라 재귀로 구현하면 트리가 한쪽으로 길게
        늘어진 경우 호출 스택 오버플로우 위험이 있어 반복문으로 처리한다.
    */
    const parent = new Array(n).fill(-1);
    const order = [];
    const visited = new Array(n).fill(false);
    const stack = [0];
    visited[0] = true;

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

    /*
        subtreeSum[node]: node를 루트로 하는 서브트리의 가중치 합.
        일반 숫자(Number)로 계산하면, 최악의 경우(체인 형태 + 극단적인 값) answer가
        약 4.5 × 10^16까지 커질 수 있어 JS의 안전한 정수 범위(2^53 - 1 = 9.007 × 10^15)를
        초과해버린다. 이 범위를 넘으면 덧셈 결과에 오차가 생겨 틀린 답이 나올 수 있으므로,
        오차 없이 정확한 정수 연산이 가능한 BigInt를 사용한다.
        (BigInt 리터럴은 숫자 뒤에 n을 붙여 표현하며, 일반 숫자와는 연산자를 섞어 쓸 수 없다.)
    */
    const subtreeSum = a.map((v) => BigInt(v));
    let answer = 0n;

    // order의 역순(리프 -> 루트)으로 처리하면 자식이 항상 부모보다 먼저 계산됨
    for (let i = order.length - 1; i >= 0; i--) {
        const node = order[i];
        const p = parent[node];
        if (p !== -1) {
            // node는 부모(p) 입장에서 "자식 서브트리"이므로, 그 합만큼 부모-자식 간선이 사용되어야 함
            // BigInt에는 Math.abs가 없으므로, 조건문으로 직접 절대값을 구함
            const abs =
                subtreeSum[node] < 0n ? -subtreeSum[node] : subtreeSum[node];
            answer += abs;
            subtreeSum[p] += subtreeSum[node];
        }
    }
    // 반환값은 문제에서 일반 숫자(Number) 형태를 기대하므로, 계산이 끝난 뒤 마지막에 한 번만 변환
    return Number(answer);
}
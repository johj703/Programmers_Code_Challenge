function solution(tickets) {
    // ----- 1. 출발 공항별로 도착 공항 목록들 모음 -----
    const graph = new Map();
    for (const [from, to] of tickets) {
        if (!graph.has(from)) graph.set(from, []);
        graph.get(from).push(to);
    }

    // ----- 2. 각 목록을 "내림차순"으로 정렬 -----
    // "pop()으로 꺼내면 항상 가장 작은(알파벳 순 앞선) 도착지가 먼저 나오도록"
    for (const [, destinations] of graph) {
        destinations.sort((a, b) => (a < b ? 1 : -1));
    }

    // ----- 3. Hierholzer 알고리즘: 스택으로 경로 탐색 -----
    const route = [];
    const stack = ['ICN']; // 항상 "ICN"에서 출발

    while (stack.length > 0) {
        const current = stack[stack.length - 1];
        const destinations = graph.get(current);

        if (destinations && destinations.length > 0) {
            // "아직 갈 수 있는 곳(사용 안 한 항공권)이 있으면" 그 중 작은 것으로 전진
            stack.push(destinations.pop());
        } else {
            // "더 갈 곳이 없으면(막다른 곳)" 결과에 기록하고 되돌아감
            route.push(stack.pop());
        }
    }

    // ----- 4. 막힌 순서대로 쌓였으므로 뒤집으면 올바른 방문 순서가 됨 -----
    return route.reverse();
}
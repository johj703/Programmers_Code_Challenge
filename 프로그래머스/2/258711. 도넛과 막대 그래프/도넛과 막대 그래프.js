function solution(edges) {
    // ----- 1. 최대 정점 번호 파악 -----
    let maxVertex = 0;
    const len = edges.length;

    for (let i = 0; i < len; i++) {
        const a = edges[i][0];
        const b = edges[i][1];

        if (a > maxVertex) maxVertex = a;
        if (b > maxVertex) maxVertex = b;
    }

    // ----- 2. 정점별 진입차수/진출차수 계산 -----
    const inDegree = new Int32Array(maxVertex + 1);
    const outDegree = new Int32Array(maxVertex + 1);

    for (let i = 0; i < len; i++) {
        const a = edges[i][0];
        const b = edges[i][1];
        outDegree[a]++;
        inDegree[b]++;
    }

    // ----- 3. 루트(생성된 정점) 찾기 -----
    // 진입차수 0이면서 진출차수가 2 이상인 유일한 정점
    // "실제 존재하는 정점"만 확인 (진입 + 진출차수 합이 0보다 큰 경우만)
    let root = -1;
    for (let v = 1; v <= maxVertex; v++) {
        if (inDegree[v] + outDegree[v] === 0) continue; // 유령 정점 제외
        if (inDegree[v] === 0 && outDegree[v] >= 2) {
            root = v;
            break;
        }
    }

    // ----- 4. 루트를 제외한 "실제 존재하는" 정점들의 차수 패턴으로 분류 -----
    let barCount = 0;
    let eightCount = 0;

    for (let v = 1; v <= maxVertex; v++) {
        if (inDegree[v] + outDegree[v] === 0) continue; // 유령 정점 제외
        if (v === root) continue;

        if (outDegree[v] === 0) {
            barCount++; // 막대의 끝 정점
        } else if (outDegree[v] === 2) {
            eightCount++; // 8자의 교차점
        }
    }

    // ----- 5. 도넛 수 = 루트의 진출차수(전체 도형 수) - 막대 수 - 8자 수 -----
    const donutCount = outDegree[root] - barCount - eightCount;

    return [root, donutCount, barCount, eightCount];
}
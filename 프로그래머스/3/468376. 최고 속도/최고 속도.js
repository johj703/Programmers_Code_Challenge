/**
 * @param {number[][]} city - 도시들의 좌표 배열 [[x1, y1], [x2, y2], ...] (1번 도시가 index 0)
 * @param {number[][]} road - 도로들의 정보 [[x1, y1, x2, y2, limit], ...]
 * @return {number[]} - 2번 도시부터 n번 도시까지 순서대로 낼 수 있는 최고 속도 배열
 */
function solution(city, road) {
    //* 조각1: 정점 등록 인프라 및 전처리 변수 세팅
    const coordToId = new Map();
    let vertexCount = 0;
    const limitOfNode = [];

    // 조각 1과 2가 공통으로 재사용하는 단일 정점 등록 함수
    function registerVertex(x, y) {
        const key = `${x},${y}`;
        if (!coordToId.has(key)) {
            coordToId.set(key, vertexCount);
            limitOfNode.push(Infinity);
            vertexCount++;
        }
        return coordToId.get(key);
    }

    //* 1-1. 도시 등록 및 각 도시의 정점 번호 매핑
    const cityNodeIds = [];
    for (let [x, y] of city) {
        cityNodeIds.push(registerVertex(x, y));
    }

    const roadCount = road.length;
    // 각 도로마다 포함되는 정점 번호들을 중복 없이 관리할 Set 배열
    const roadVertices = Array.from({ length: roadCount }, () => new Set());

    //* 1-2. 각 도로의 양 끝점과 중앙 카메라 지점 추출 및 초기화
    for (let i = 0; i < roadCount; i++) {
        const [x1, y1, x2, y2, limit] = road[i];
        const startId = registerVertex(x1, y1);
        const endId = registerVertex(x2, y2);

        const midX = Math.floor((x1 + x2) / 2);
        const midY = Math.floor((y1 + y2) / 2);
        const midId = registerVertex(midX, midY);

        // 한 지점에 카메라가 여러 개 겹치는 경우 최솟값 보정 적용
        if (limit !== undefined && limit !== null) {
            limitOfNode[midId] = Math.min(limitOfNode[midId], limit);
        }

        roadVertices[i].add(startId);
        roadVertices[i].add(endId);
        roadVertices[i].add(midId);
    }

    //* 조각2: 가로 x 세로 교차점 탐색 및 도시 선분 안착 보정
    //* 2-1. 모든 도로 쌍을 검사하여 가로와 세로가 충돌하는 교차점 발굴
    for (let i = 0; i < roadCount; i++) {
        for (let j = i + 1; j < roadCount; j++) {
            const r1 = road[i];
            const r2 = road[j];
            const isHoriz1 = r1[1] === r1[3];
            const isHoriz2 = r2[1] === r2[3];
            if (isHoriz1 === isHoriz2) continue; // 둘 다 가로이거나 둘 다 세로면 패스

            const horiz = isHoriz1 ? r1 : r2;
            const vert = isHoriz1 ? r2 : r1;
            const hIdx = isHoriz1 ? i : j;
            const vIdx = isHoriz1 ? j : i;

            const [hx1, hy, hx2, _hy] = horiz;
            const [vx, vy1, _vx, vy2] = vert;

            if (
                vx >= Math.min(hx1, hx2) &&
                vx <= Math.max(hx1, hx2) &&
                hy >= Math.min(vy1, vy2) &&
                hy <= Math.max(vy1, vy2)
            ) {
                const crossId = registerVertex(vx, hy);
                roadVertices[hIdx].add(crossId);
                roadVertices[vIdx].add(crossId);
            }
        }
    }

    //* 2-2. 도시가 교차점이 아닌 도로 한복판 선분 위에 놓여 있는 경우 독립 보정
    for (let cIdx = 0; cIdx < city.length; cIdx++) {
        const [cx, cy] = city[cIdx];
        const cityId = cityNodeIds[cIdx];

        for (let i = 0; i < roadCount; i++) {
            const [x1, y1, x2, y2] = road[i];
            const isHoriz = y1 === y2;

            if (
                isHoriz &&
                cy === y1 &&
                cx >= Math.min(x1, x2) &&
                cx <= Math.max(x1, x2)
            ) {
                roadVertices[i].add(cityId);
            } else if (
                !isHoriz &&
                cx === x1 &&
                cy >= Math.min(y1, y2) &&
                cy <= Math.max(y1, y2)
            ) {
                roadVertices[i].add(cityId);
            }
        }
    }

    // 모든 교차점 및 예외 정점 등록이 '완전히 끝난 직후'
    // 확정된 vertexCount를 기반으로 idToCoord 배열과 adj 인접 리스트 빌드 개시
    const idToCoord = new Array(vertexCount);
    for (let [key, id] of coordToId.entries()) {
        idToCoord[id] = key.split(',').map(Number);
    }

    const adj = Array.from({ length: vertexCount }, () => new Set());

    //* 2-3. 도로 선분별 일차원 오름차순 정렬 후 인접 이웃 쌍끼리 간선 엮기
    for (let i = 0; i < roadCount; i++) {
        const vList = Array.from(roadVertices[i]);
        const isHoriz = road[i][1] === road[i][3];

        vList.sort((idA, idB) => {
            const [xA, yA] = idToCoord[idA];
            const [xB, yB] = idToCoord[idB];
            return isHoriz ? xA - xB : yA - yB;
        });

        for (let k = 0; k < vList.length - 1; k++) {
            const u = vList[k];
            const v = vList[k + 1];
            if (!adj[u].has(v)) {
                adj[u].add(v);
                adj[v].add(u);
            }
        }
    }

    //* 조각3: ① 반복문 기반의 유니온 파인드 자료구조 정의
    const parent = new Array(vertexCount);
    for (let i = 0; i < vertexCount; i++) parent[i] = i;

    // 반복문 루프 및 경로 압축(Path Compression)이 설계된 안정적인 find
    function find(node) {
        let root = node;
        while (root !== parent[root]) {
            root = parent[root];
        }

        // curr, nxt 명칭을 current, nextNode로 명확하게 리팩토링
        let current = node;
        while (current !== root) {
            let nextNode = parent[current];
            parent[current] = root;
            current = nextNode;
        }
        return root;
    }

    // 쓰이지 않는 true/false 반환 제거 후 함수 구조 단순화
    function union(nodeA, nodeB) {
        const rootA = find(nodeA);
        const rootB = find(nodeB);
        if (rootA !== rootB) {
            parent[rootA] = rootB;
        }
    }

    //* 조각3: ② 초기 연결 (카메라 제약이 없는 공짜 다리 사전 병합)
    for (let u = 0; u < vertexCount; u++) {
        if (limitOfNode[u] !== Infinity) continue;

        for (let v of adj[u]) {
            if (limitOfNode[v] === Infinity) {
                union(u, v);
            }
        }
    }

    // 각 도시의 최고 속도 정답 배열 초기화
    const cityAnswers = new Array(city.length).fill(-1);

    // 태초의 상태에서 이미 1번 도시(시작 노드)와 한 컴포넌트로 이어진 도시는 공짜 길이므로 0 확정
    const startNode = cityNodeIds[0];
    const startRoot = find(startNode);
    for (let i = 0; i < city.length; i++) {
        if (find(cityNodeIds[i]) === startRoot) {
            cityAnswers[i] = 0;
        }
    }

    //* 조각3: ③ 카메라 정점 수집 및 limit 기준 내림차순 정렬
    const cameraNodes = [];
    for (let i = 0; i < vertexCount; i++) {
        if (limitOfNode[i] !== Infinity) {
            cameraNodes.push(i);
        }
    }
    cameraNodes.sort((a, b) => limitOfNode[b] - limitOfNode[a]);

    //* 조각3: ④ 큰 카메라부터 하나씩 열며 실시간 도시 상봉 추적
    const isOpened = new Array(vertexCount).fill(false);

    for (let c of cameraNodes) {
        isOpened[c] = true;
        const currentLimit = limitOfNode[c];

        for (let next of adj[c]) {
            if (limitOfNode[next] === Infinity || isOpened[next]) {
                union(c, next);
            }
        }

        // 다리가 연결된 순간, 1번 도시와 상봉에 성공한 도시들의 첫 limit 장벽 기록
        const currentStartRoot = find(startNode);
        for (let i = 0; i < city.length; i++) {
            if (
                cityAnswers[i] === -1 &&
                find(cityNodeIds[i]) === currentStartRoot
            ) {
                cityAnswers[i] = currentLimit;
            }
        }
    }

    //* 조각3: ⑤ 최종 반환 (2번 도시부터 n번 도시까지 순서대로 정돈)
    const finalResult = [];
    for (let i = 1; i < city.length; i++) {
        finalResult.push(cityAnswers[i] === -1 ? 0 : cityAnswers[i]);
    }

    return finalResult;
}
function solution(nodes, edges) {
    // 최종 결과로 반환할 [홀짝 트리 개수, 역홀짝 트리 개수]
    let oddEvenTreeCount = 0;
    let reverseOddEvenTreeCount = 0;

    // 1단계 - 각 노드의 차수(degree) 및 양방향 인접 리스트 생성
    const degrees = new Map();
    const adjList = new Map();

    for (let node of nodes) {
        degrees.set(node, 0);
        adjList.set(node, []);
    }

    for (let [u, v] of edges) {
        degrees.set(u, degrees.get(u) + 1);
        adjList.get(u).push(v);

        degrees.set(v, degrees.get(v) + 1);
        adjList.get(v).push(u);
    }

    // 2단계 - BFS를 활용하여 포레스트 내의 독립된 트리(연결 요소)들을 분리 수집
    const visited = new Set();
    const components = []; // 분리된 트리들의 노드 목록을 담을 2차원 배열

    for (let startNode of nodes) {
        if (visited.has(startNode)) continue;

        const treeNodes = [];
        const queue = [startNode];
        visited.add(startNode);

        // shift() 대용으로 사용할 index 포인터 변수 선언
        let head = 0;

        // queue.length > 0 대신, '아직 처리해야 할 원소가 남았는지' index로 비교
        while (head < queue.length) {
            // shift() 대신 head index로 원소를 O(1)로 꺼내고 포인터를 1 증가
            const curr = queue[head++];
            treeNodes.push(curr);

            const neighbors = adjList.get(curr) || [];
            for (let nextNode of neighbors) {
                if (!visited.has(nextNode)) {
                    visited.add(nextNode);
                    queue.push(nextNode); // push()는 맨 뒤에 넣으므로 O(1)로 안전
                }
            }
        }
        components.push(treeNodes);
    }

    // 3, 4단계 - 수집된 트리들을 순회하며 각 트리의 유형을 판정 및 카운트
    for (let treeNodes of components) {
        // 3단계 - 현재 트리 내의 일반 상태(차수 - 1) 기준 불만족 노드 개수 집계
        const counts = countUnsatisfiedNodes(treeNodes, degrees);

        // 4단계 - 불만족 개수 기반으로 루트 격상 조건 추가 검증 후 최종 유형 판정
        const { isOddEvenTree, isReverseOddEvenTree } = checkTreeType(
            treeNodes,
            degrees,
            counts,
        );

        // 결과에 따라 최종 정답 카운트 누적
        if (isOddEvenTree) oddEvenTreeCount++;
        if (isReverseOddEvenTree) reverseOddEvenTreeCount++;
    }

    // 문제 조건에 따른 정답 형태 배열 반환
    return [oddEvenTreeCount, reverseOddEvenTreeCount];
}

/* ------------------------------------------------------------------------------ */
/* 내부 검증용 헬퍼 및 판정용 독립 함수들 */

/* 일반 노드(자식 수: 차수 -1) 기준의 홀짝 조건 검증 헬퍼 함수 */
// 1. 일반 노드 상태일 때 홀짝 조건을 만족하는지 판별
function isNormalOddEven(node, deg) {
    const nodeParity = node & 1; // 노드 번호의 홀짝(홀: 1, 짝: 0)
    const childParity = (deg - 1) & 1; // 일반 노드일 때의 자식 수(deg - 1)의 홀짝
    return nodeParity === childParity;
}

// 2. 일반 노드 상태일 때 역홀짝 조건을 만족하는지 판별
function isNormalReverseOddEven(node, deg) {
    const nodeParity = node & 1;
    const childParity = (deg - 1) & 1;
    return nodeParity !== childParity;
}

/* 루트 노드(자식 수: 차수 그대로) 기준의 홀짝 조건 검증 헬퍼 함수 */
// 3. 루트 노드 상태일 때 홀짝 조건을 만족하는지 판별
function isRootOddEven(node, deg) {
    const nodeParity = node & 1;
    const childParity = deg & 1; // 루트 노드일 때는 차수(deg) 자체가 자식 수
    return nodeParity === childParity;
}

// 4. 루트 노드 상태일 때 역홀짝 조건을 만족하는지 판별
function isRootReverseOddEven(node, deg) {
    const nodeParity = node & 1;
    const childParity = deg & 1; // 루트 노드일 때는 차수(deg) 자체가 자식 수
    return nodeParity !== childParity;
}

/* 하나의 트리 컴포넌트를 넘겨받아 홀짝/역홀짝 트리 유형을 최종 판정하는 함수 */
function checkTreeType(treeNodes, degrees, counts) {
    const { unsatisfiedOddEvenCount, unsatisfiedReverseOddEvenCount } = counts;

    let isOddEvenTree = false; // 이 트리가 홀짝 트리가 될 수 있는가?
    let isReverseOddEvenTree = false; // 이 트리가 역홀짝 트리가 될 수 있는가?

    /* 파트A - 홀짝 트리 성립 여부 검증 */
    if (unsatisfiedOddEvenCount === 0) {
        /* 케이스 1: 일반 기준 불만족 노드가 0개인 경우
        -> 트리 내부 노드 중 '루트 자리에 앉혀도 조건을 만족하는 노드'가 최소 1개가 있어야 함 */
        for (let node of treeNodes) {
            const deg = degrees.get(node) || 0;
            if (isRootOddEven(node, deg)) {
                isOddEvenTree = true;
                break;
            }
        }
    } else if (unsatisfiedOddEvenCount === 1) {
        /* 케이스 2: 일반 기준 불만족 노드가 정확히 1개인 경우
            -> '그 유일한 불만족 노드'가 루트 왕좌에 올랐을 때 치유(조건 만족)되는지 검증 */
        for (let node of treeNodes) {
            const deg = degrees.get(node) || 0;
            if (!isNormalOddEven(node, deg)) {
                // 불만족 노드 탐색
                if (isRootOddEven(node, deg)) {
                    // 루트 기준 추가 검증
                    isOddEvenTree = true;
                }
                break;
            }
        }
    }

    /* 파트B - 역홀짝 트리 성립 여부 검증 */
    if (unsatisfiedReverseOddEvenCount === 0) {
        /* 케이스 1: 일반 기준 역홀짝 불만족 노드가 0개인 경우 
        -> 트리 내부 노드 중 '루트 기준 역홀짝'을 만족하는 노드가 최소 1개 있어야 함 */
        for (let node of treeNodes) {
            const deg = degrees.get(node) || 0;
            if (isRootReverseOddEven(node, deg)) {
                isReverseOddEvenTree = true;
                break;
            }
        }
    } else if (unsatisfiedReverseOddEvenCount === 1) {
        /* 케이스 2: 일반 기준 역홀짝 불만족 노드가 정확히 1개인 경우
        -> '그 유일한 역홀짝 불만족 노드'가 루트가 되었을 때 조건을 만족하는지 검증 */
        for (let node of treeNodes) {
            const deg = degrees.get(node) || 0;
            if (!isNormalReverseOddEven(node, deg)) {
                // 역홀짝 불만족 노드 탐색
                if (isRootReverseOddEven(node, deg)) {
                    // 루트 기준 역홀짝 추가 검증
                    isReverseOddEvenTree = true;
                }
                break;
            }
        }
    }
    return { isOddEvenTree, isReverseOddEvenTree };
}

// 하나의 트리(treeNodes)를 훑으며 불만족 노드 개수를 세는 함수
function countUnsatisfiedNodes(treeNodes, degrees) {
    let unsatisfiedOddEvenCount = 0; // 홀짝 조건 불만족 개수
    let unsatisfiedReverseOddEvenCount = 0; // 역홀짝 조건 불만족 개수

    for (let node of treeNodes) {
        const deg = degrees.get(node) || 0;

        // 1. 홀짝 조건을 만족하지 못하면 카운트 증가
        if (!isNormalOddEven(node, deg)) {
            unsatisfiedOddEvenCount++;
        }

        // 2. 역홀짝 조건을 만족하지 못하면 카운트 증가
        if (!isNormalReverseOddEven(node, deg)) {
            unsatisfiedReverseOddEvenCount++;
        }
    }

    // 두 가지 불만족 개수를 묶어서 반환
    return {
        unsatisfiedOddEvenCount,
        unsatisfiedReverseOddEvenCount,
    };
}
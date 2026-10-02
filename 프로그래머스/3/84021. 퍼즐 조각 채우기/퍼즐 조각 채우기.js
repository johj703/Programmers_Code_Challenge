function solution(game_board, table) {
    let totalScore = 0; //  최종적으로 채워진 퍼즐 조각의 총 칸 수

    // 1, 2단계 - 보드의 빈 칸(0)과 테이블의 조각(1) 덩어리들을 각각 추출
    const boardBlanks = getShape(game_board, 0); // 빈 칸 덩어리 목록
    const tablePieces = getShape(table, 1); // 퍼즐 조각 덩어리 목록

    // 3단계 - 테이블 조각들을 '대표 키' 기준으로 그룹화하여 Map에 저장
    // key: 대표 문자열 키, value: 해당 모양의 조각 리스트 [piece1, piece2, ...]
    const pieceMap = new Map();

    for (let piece of tablePieces) {
        const canonicalKey = getCanonicalKey(piece);

        if (!pieceMap.has(canonicalKey)) {
            pieceMap.set(canonicalKey, []);
        }
        pieceMap.get(canonicalKey).push(piece);
    }

    // 4단계 - 게임보드의 빈칸들을 순회하며 Map과 O(1) 단방향 매칭 및 차감
    for (let blank of boardBlanks) {
        // 현재 빈 칸 덩어리의 대표 키 도출
        const blankKey = getCanonicalKey(blank);

        // Map에 해당 대표 키를 가진 퍼즐 조각들이 존재하고, 아직 잔여 조각이 남아있다면
        if (pieceMap.has(blankKey) && pieceMap.get(blankKey).length > 0) {
            const pieces = pieceMap.get(blankKey);

            // 문제 규칙상 빈 칸의 크기와 퍼즐 조각의 크기(칸 수)가 '완벽하게 일치'해야만 끼워 넣을 수 있음
            // (주변 칸을 침범하거나 남으면 안 되기 때문에)
            let matchedIndex = -1;
            for (let i = 0; i < pieces.length; i++) {
                if (pieces[i].length === blank.length) {
                    matchedIndex = i;
                    break;
                }
            }

            // 크기까지 완벽히 일치하는 조각을 찾았다면 매칭을 확정
            if (matchedIndex !== -1) {
                // 1. 해당 퍼즐 조각의 칸 수만큼 정답 점수 누적
                totalScore += blank.length;

                // 2. 중복 사용 방지를 위해 사용된 조각을 배열에서 영구 차감
                pieces.splice(matchedIndex, 1);

                // 3. 만약 해당 모양의 조각이 더 이상 없다면 Map에서 깔끔하게 제거(습관 최적화)
                if (pieces.length === 0) {
                    pieceMap.delete(blankKey);
                }
            }
        }
    }
    // 최종 맞춰진 퍼즐 조각들의 칸 수 반환
    return totalScore;
}

// -----------------------------------------------------------------------------------------

// [헬퍼 함수 1] 그리드와 타깃 값(0 또는 1)을 받아 연결된 덩어리 좌표들을 BFS로 추출
// grid: game_board(빈칸 0) 또는 table(조각 1) 2차원 배열
// targetValue: 찾고자 하는 타깃 값(0 또는 1)
function getShape(grid, targetValue) {
    const N = grid.length;
    // 방문 여부를 체크할 2차원 배열(false로 초기화)
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    const shapes = []; // 발견된 모든 덩어리(조각)들을 담을 결과 배열

    // 상, 하, 좌, 우 4방향 이동 변화량
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    // 격자판의 모든 칸을 전체적으로 순회
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            // 아직 방문하지 않았고, 우리가 찾던 타깃 값(0 또는 1)을 발견한 경우
            if (grid[i][j] === targetValue && !visited[i][j]) {
                const currentShape = []; // 이번 BFS로 수집할 하나의 덩어리 좌표들
                const queue = [];

                // 시작점 세팅
                queue.push([i, j]);
                visited[i][j] = true;

                // BFS 탐색 시작
                while (queue.length > 0) {
                    const [r, c] = queue.shift();
                    currentShape.push([r, c]); // 절대좌표 기록

                    // 상하좌우 4방향을 검사
                    for (let d = 0; d < 4; d++) {
                        const nr = r + dr[d];
                        const nc = c + dc[d];

                        // 격자 범위 내에 있고, 아직 방문 안 했으며, 같은 타깃 값인 경우 전진
                        if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
                            if (
                                grid[nr][nc] === targetValue &&
                                !visited[nr][nc]
                            ) {
                                visited[nr][nc] = true;
                                queue.push([nr, nc]);
                            }
                        }
                    }
                }

                // 하나의 독립된 덩어리(연결된 영역) 수집이 끝나면 전체 리스트에 주입
                shapes.push(currentShape);
            }
        }
    }
    // [[[,], [,]], [[,], [,]]] 형태의 2차원 좌표 배열의 배열 반환
    return shapes;
}

// -----------------------------------------------------------------------------------------

// [헬퍼 함수 2] 절대좌표를 받아서 가장 왼쪽 위를 (0,0)으로 당겨주는 원점 정규화 함수
// shape: [[r1, c1], [r2, c2], ...] 형태의 한 덩어리 절대좌표 배열
function normalize(shape) {
    // 1. 기준점이 될 최소 행(minR)과 최소 열(minC)을 찾기
    let minR = Infinity;
    let minC = Infinity;

    for (let [r, c] of shape) {
        if (r < minR) minR = r;
        if (c < minC) minC = c;
    }

    // 2. 모든 좌표를 (minR, minC) 기준으로 원점 이동(상대좌표 변환) 시키기
    const normalizedShape = shape.map(([r, c]) => {
        return [r - minR, c - minC];
    });

    return normalizedShape; // (0, 0)에 안착한 새 좌표 배열 반환
}

// -----------------------------------------------------------------------------------------
// [헬퍼 함수 3] 문자열화를 보장하기 위해 행->열 순으로 오름차순 정렬하는 함수
// shape: [[r1, c1], [r2, c2], ...] 형태의 2차원 좌표 배열
function sortShape(shape) {
    /* 원본 배열이 변경되는 것을 막기 위해 복사 후 정렬하거나,
    혹은 원본을 바로 정렬(inplace)한다. 여기서는 원본을 정렬 */
    shape.sort((a, b) => {
        // a와 b는 각각 [r, c] 형태의 좌표
        const [rA, cA] = a;
        const [rB, cB] = b;

        // 1. 먼저 행(r) 기준으로 비교
        if (rA !== rB) {
            return rA - rB; // 행 기준 오름차순 정렬
        }

        // 2. 만약 행이 같다면, 열(c) 기준으로 비교
        return cA - cB; // 열 기준 오름차순 정렬
    });

    return shape;
}

// -----------------------------------------------------------------------------------------
// [헬퍼 함수 4] 바운딩 박스 크기 추적 없이 좌표를 (c, -r)로 가볍게 회전시키는 함수
// 매번 격자 크기 N을 추적하지 않도록, 가볍게 (c, -r)로 꺾어주는 최적화 공식을 쓰기
function rotate90(shape) {
    return shape.map(([r, c]) => [c, -r]);
}

// [헬퍼 함수 5] 4방향 회전 문자열 키 중 사전순 최솟값을 도출하여 독립 이름표를 부여하는 함수
// 4가지 회전 모양 중 사전순으로 가장 작은 대표 문자열 키를 구하는 함수
function getCanonicalKey(shape) {
    const keys = [];
    let currentShape = shape;

    // 0도, 90도, 180도, 270도 총 4번 회전 루프를 돌리기
    for (let i = 0; i < 4; i++) {
        // 1. 안전을 위해 매 회전 단계마다 정규화(원점 이동)를 적용
        const normalized = normalize(currentShape);

        // 2. 일관된 문자열 대조를 위해 행->열 순서로 정렬
        const sorted = sortShape(normalized);

        // 3. 정렬이 완료된 배열을 JSON 문자열로 변환하여 후보 목록에 주입
        keys.push(JSON.stringify(sorted));

        // 4. 다음 루프를 위해 현재 도형을 90도 회전
        currentShape = rotate90(currentShape);
    }

    // 4개의 문자열 키 중에서 사전순으로 가장 작은(앞서는) 값을 선택
    // 자바스크립트의 sort()는 기본적으로 문자열 사전순(ASCII) 정렬을 수행
    keys.sort();

    return keys[0]; // 사전순 최솟값인 '대표 키' 반환
}

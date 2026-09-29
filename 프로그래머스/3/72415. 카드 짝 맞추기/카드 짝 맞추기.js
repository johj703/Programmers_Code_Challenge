function solution(board, r, c) {
    // 최소값을 추적할 전역/상위 스코프 변수 초기화
    let minTotalCost = Infinity;

    // 채점 환경에서의 원본 오염을 방지하기 위해 2차원 배열의 깊은 복사
    const boardCopy = board.map((row) => [...row]);

    // 헬퍼 함수1: 특정 방향으로 Ctrl을 눌렀을 때 도착하는 칸 계산
    function getCtrlPosition(currR, currC, dr, dc, currentBoard) {
        let nr = currR;
        let nc = currC;

        // 보드판 경계(4×4)를 벗어나지 않는 동안 계속 전진
        while (true) {
            // 해당 방향으로 한 칸 전진 후보 좌표 계산
            const nextR = nr + dr;
            const nextC = nc + dc;

            // 조건1: 전진할 곳이 보드판 범위를 벗어난다면, 더 이상 가지 못하고 현재 위치에서 멈춤
            if (nextR < 0 || nextR >= 4 || nextC < 0 || nextC >= 4) {
                break;
            }

            // 범위를 벗어나지 않았다면 실제로 한 칸 전진
            nr = nextR;
            nc = nextC;

            // 조건2: 전진한 칸에 카드가 존재한다면(0이 아니라면) 규칙에 따라 즉시 그 카드 칸에서 멈춤
            if (currentBoard[nr][nc] !== 0) {
                break;
            }
        }

        // 최종적으로 멈추게 된 좌표를 반환
        return [nr, nc];
    }

    // 헬퍼 함수2: 두 좌표 사이의 최소 이동 비용을 구하는 미니BFS
    function getMinDistance(r1, c1, r2, c2, CurrentBoard) {
        // 시작점과 목표점이 이미 같다면 이동 비용은 0
        if (r1 === r2 && c1 === c2) return 0;

        // 4×4 보드판의 방문 여부를 체크할 배열(false로 초기화)
        const visited = Array.from({ length: 4 }, () => Array(4).fill(false));

        // BFS를 위한 큐 생성 및 초기 상태 주입 [행, 열, 누적 이동 회수]
        const queue = [];
        queue.push([r1, c1, 0]);
        visited[r1][c1] = true;

        // 상, 하, 좌, 우 4방향 변화량
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        while (queue.length > 0) {
            const [currR, currC, dist] = queue.shift();

            // 목표 좌표에 도달했다면 현재까지의 누적 최단 거리를 즉시 반환
            if (currR === r2 && currC === c2) {
                return dist;
            }

            // 일반 이동 4방향 + Ctrl 이동 4방향 = 총 8가지 간선을 탐색
            for (let i = 0; i < 4; i++) {
                // 일반 방향키 이동(카드가 있든 없든 딱 1칸 전진)
                const nr1 = currR + dr[i];
                const nc1 = currC + dc[i];

                // 보드판 범위 내부고 아직 방문하지 않았다면 큐에 추가
                if (nr1 >= 0 && nr1 < 4 && nc1 >= 0 && nc1 < 4) {
                    if (!visited[nr1][nc1]) {
                        visited[nr1][nc1] = true;
                        queue.push([nr1, nc1, dist + 1]);
                    }
                }

                // Ctrl 점프 이동 = Ctrl + 방향키 이동 (카드를 만나거나 벽 끝까지 점프)
                const [nr2, nc2] = getCtrlPosition(
                    currR,
                    currC,
                    dr[i],
                    dc[i],
                    CurrentBoard,
                );

                // 점프한 위치가 아직 방문하지 않은 곳이라면 큐에 추가
                if (!visited[nr2][nc2]) {
                    visited[nr2][nc2] = true;
                    queue.push([nr2, nc2, dist + 1]);
                }
            }
        }
        // 이론상 4×4 격자 내에서 도달하지 못하는 경우는 없음
        return 0;
    }
    // 헬퍼 함수: 카드 쌍들의 방문 순서를 탐색하는 백트래킹 재귀 함수
    function backtrack(currR, currC, currentBoard, cost) {
        // 현재 보드에 남아있는 카드 값들(1~6 중 아직 0이 아닌 것들)을 찾기
        const remainingCards = new Set();
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (currentBoard[i][j] !== 0) {
                    remainingCards.add(currentBoard[i][j]);
                }
            }
        }

        // 기저 조건: 남아있는 카드가 없다면 모든 카드를 맞춘 것이므로 최소값을 갱신하고 종료
        if (remainingCards.size === 0) {
            minTotalCost = Math.min(minTotalCost, cost);
            return;
        }

        // 현재까지의 비용이 이미 기존 최소값보다 크다면 더 이상 탐색할 필요 없음(최적화 가지치기)
        if (cost >= minTotalCost) return;

        // 남아있는 카드 값들 중 하나(cardNum)를 골라서 시도
        for (let cardNum of remainingCards) {
            // 해다 cardNum을 가진 두 장의 카드 좌표를 찾기
            const positions = [];
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (currentBoard[i][j] === cardNum) {
                        positions.push([i, j]);
                    }
                }
            }

            const [cardA, cardB] = positions; // 두 카드의 위치 [r, c]

            // 두 좌표 중 어느 것을 먼저 방문할 지 2가지 경우를 모두 시도
            // 순서 1: 현재 위치 -> 카드A -> 카드B
            // 순서 2: 현재 위치 -> 카드B -> 카드A
            const orders = [
                [cardA, cardB], // 첫 번째 카드 먼저
                [cardB, cardA], // 두 번째 카드 먼저
            ];

            for (let [first, second] of orders) {
                // 각 경우마다 이동 비용과 Enter 비용(1)을 계산
                // 1. 현재 위치 -> 첫 번째 카드 이동 비용
                const dist1 = getMinDistance(
                    currR,
                    currC,
                    first[0],
                    first[1],
                    currentBoard,
                );
                // 2. 첫 번째 카드 -> 두 번째 카드 이동 비용
                const dist2 = getMinDistance(
                    first[0],
                    first[1],
                    second[0],
                    second[1],
                    currentBoard,
                );

                // 총 추가 비용 = dist1 + Enter(1) + dist2 + Enter(1)
                const addCost = dist1 + 1 + dist2 + 1;

                // 두 카드를 보드에서 제거(0으로 변경)
                currentBoard[first[0]][first[1]] = 0;
                currentBoard[second[0]][second[1]] = 0;

                // 커서 위치를 "두 번째로 방문한 카드 위치"로 두고 재귀 호출
                backtrack(second[0], second[1], currentBoard, cost + addCost);

                // 원상복구(백트래킹): 재귀에서 돌아오면 다음 시도를 위해 보드를 원래 카드로 되돌리기
                currentBoard[first[0]][first[1]] = cardNum;
                currentBoard[second[0]][second[1]] = cardNum;
            }
        }
    }

    // 복사본 격자를 들고 백트래킹 최초 실행 및 결과 반환
    backtrack(r, c, boardCopy, 0);

    return minTotalCost;
}
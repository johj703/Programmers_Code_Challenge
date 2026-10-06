function solution(h, grid, panels, seqs) {
    const panelCount = panels.length;
    const { prerequisiteMask, travelTime } = setupPrerequisitesAndTravelTime(
        panelCount,
        h,
        1,
        panels,
        grid,
        seqs,
    );
    const fullMask = (1 << panelCount) - 1; // 패널을 모두 켠 상태

    // dp[mask][last] = 컨 집합이 mask, 마지막으로 켠 패널이 last일 때의 최소 시간
    const dp = Array.from({ length: fullMask + 1 }, () =>
        Array(panelCount).fill(Infinity),
    );

    // 시작 상태 - 선행 조건이 없는 패널 first를 처음 켜는 경우
    for (let first = 0; first < panelCount; first++) {
        // 1. 선행 조건이 없다는 조건 (prerequisiteMask 가 0인지 확인)
        if (prerequisiteMask[first] === 0) {
            // 2. first 하나만 켠 mask 상태에, 시작 위치(인덱스 0) -> first 패널 이동 시간을 주입
            dp[1 << first][first] = travelTime[0][first];
        }
    }

    // 점화식 - mask를 작은 수부터 확장
    for (let mask = 1; mask <= fullMask; mask++) {
        for (let last = 0; last < panelCount; last++) {
            if (dp[mask][last] === Infinity) continue;

            for (let next = 0; next < panelCount; next++) {
                // 3. next가 이미 mask에 있으면 건너뛰기
                if ((mask & (1 << next)) !== 0) continue;

                // 4. next의 선행 집합이 mask에 모두 있지 않으면 건너뛰기
                if ((mask & prerequisiteMask[next]) !== prerequisiteMask[next])
                    continue;

                // 5. 새롭게 next 패널 비트를 추가로 켜주기
                const newMask = mask | (1 << next);

                // 6. 직전 누적 시간에 last 패널 -> next 패널 이동 시간을 더해줌
                const newTime = dp[mask][last] + travelTime[last][next];

                // 7. dp[newMask][next]를 더 작은 값으로 최솟값 갱신
                if (newTime < dp[newMask][next]) {
                    dp[newMask][next] = newTime;
                }
            }
        }
    }

    // 최종 답 - 모든 패널을 켠 상태에서 last별 최솟값 구하기
    // 8. 모든 패널이 켜진 dp[fullMask]의 15개 도착지 후보 중 가장 빠른 시간을 최종 반환
    const minTotalTime = Math.min(...dp[fullMask]);

    // 만약 도달할 수 없는 예외 상황이라면 -1을 반환하거나, 정상적인 최소값을 반환
    return minTotalTime === Infinity ? -1 : minTotalTime;
}

//----------------------------------------------------------------------------------------------
// [조각 1] & [조각 2] 마스터 빌더 함수
// k: 패널 개수, h: 층수, floorCost: 엘리베이터 층간 이동 시간
// panels: 각 패널의 정보 [[r, c, floor], ...] (1번 패널이 0번 인덱스)
// grid: 2차원 평면 격자판 (벽 'X', 통로 '.', 엘리베이터 'E')

function setupPrerequisitesAndTravelTime(k, h, floorCost, panels, grid, seqs) {
    // 조각 1: prerequisiteMask 만들기 (빈칸 완벽 완성)
    const prerequisiteMask = new Array(k).fill(0);

    for (let [a, b] of seqs) {
        // b번 패널(index b - 1)의 상자에 선행 패널 a(비트 자릿수 a-1)를 주입
        prerequisiteMask[b - 1] = prerequisiteMask[b - 1] | (1 << (a - 1));
    }

    // 조각 2: 평면 BFS 함수 및 k x k travelTime 표 만들기
    const R = grid.length;
    const C = grid[0].length;

    // 평면상의 임의의 좌표(startR, startC)에서 출발하여 모든 칸으로의 최단 거리를 구하는 일반 BFS 헬퍼
    function bfs2D(startR, startC) {
        const dist = Array.from({ length: R }, () => Array(C).fill(Infinity));
        const queue = [[startR, startC]];
        dist[startR][startC] = 0;

        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];
        let head = 0;

        while (head < queue.length) {
            const [r, c] = queue[head++];

            for (let d = 0; d < 4; d++) {
                const nr = r + dr[d];
                const nc = c + dc[d];

                // 범위 내에 있고 벽('X')이 아니며, 더 짧은 경로를 발견했다면 전진
                if (
                    nr >= 0 &&
                    nr < R &&
                    nc >= 0 &&
                    nc < C &&
                    grid[nr][nc] !== '#'
                ) {
                    if (dist[nr][nc] === Infinity) {
                        dist[nr][nc] = dist[r][c] + 1;
                        queue.push([nr, nc]);
                    }
                }
            }
        }
        return dist;
    }

    // 엘리베이터 'E'의 평면 좌표 찾기
    let elevatorR = -1,
        elevatorC = -1;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (grid[i][j] === '@') {
                elevatorR = i;
                elevatorC = j;
                break;
            }
        }
    }

    // 각 패널(0 ~ k-1)별로 평면 BFS를 한 번씩만 미리 돌려둠
    // flatDists[i] -> i번 패널에서 평면 전체 칸으로 가는 최단 거리 지도
    const flatDists = [];
    for (let i = 0; i < k; i++) {
        const [, pr, pc] = panels[i];
        flatDists.push(bfs2D(pr - 1, pc - 1));
    }

    // 최종 k x k 크기의 travelTime 표 초기화
    const travelTime = Array.from({ length: k }, () => Array(k).fill(0));

    for (let i = 0; i < k; i++) {
        for (let j = 0; j < k; j++) {
            if (i === j) {
                travelTime[i][j] = 0;
                continue;
            }

            const [floorI, rI, cI] = panels[i];
            const [floorJ, rJ, cJ] = panels[j];

            if (floorI === floorJ) {
                // 1) 같은 층인 경우 -> 평면상에서의 최단 거리 그대로 채택
                travelTime[i][j] = flatDists[i][rJ - 1][cJ - 1];
            } else {
                // 2) 다른 층인 경우 -> 대칭성을 활용한 상숫값 공식 대입 (리뷰어 가이드 반영)
                const distToElevatorI = flatDists[i][elevatorR][elevatorC];
                const distToElevatorJ = flatDists[j][elevatorR][elevatorC];
                const floorDiff = Math.abs(floorI - floorJ);

                travelTime[i][j] =
                    distToElevatorI + floorDiff * floorCost + distToElevatorJ;
            }
        }
    }

    return { prerequisiteMask, travelTime };
}

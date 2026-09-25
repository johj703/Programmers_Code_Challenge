function solution(maze) {
    const w = maze[0].length; // 격자의 가로 길이(열의 개수)

    // 1. redStart, blueStart, redEnd, blueEnd 좌표 뽑기
    let redStart, blueStart, redEnd, blueEnd;
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === 1) redStart = [i, j];
            else if (maze[i][j] === 2) blueStart = [i, j];
            else if (maze[i][j] === 3) redEnd = [i, j];
            else if (maze[i][j] === 4) blueEnd = [i, j];
        }
    }

    // 2. 시작 visited 비트마스크 만들기
    const redStartIndex = redStart[0] * w + redStart[1];
    const blueStartIndex = blueStart[0] * w + blueStart[1];
    const initRedVisited = 1 << redStartIndex;
    const initBlueVisited = 1 << blueStartIndex;

    // 3. queue 초기화 + 시작 상태 push
    const queue = [];
    queue.push({
        redPos: redStart,
        bluePos: blueStart,
        redVisited: initRedVisited,
        blueVisited: initBlueVisited,
        moves: 0,
    });

    // 4. visitedStates Set 만들고, 시작 상태의 stateKey도 미리 add하기
    const visitedStates = new Set();
    const startStateKey = `${redStart[0]},${redStart[1]}/${initRedVisited}/${blueStart[0]},${blueStart[1]}/${initBlueVisited}`;
    visitedStates.add(startStateKey);

    while (queue.length > 0) {
        const current = queue.shift();

        // 5. 목표 도달 체크 -> 도달했으면, current.moves 반환
        if (
            current.redPos[0] === redEnd[0] &&
            current.redPos[1] === redEnd[1] &&
            current.bluePos[0] === blueEnd[0] &&
            current.bluePos[1] === blueEnd[1]
        ) {
            return current.moves;
        }

        // 6. 빨간/파란 각각 후보 위치 구하기 (getCandidatePositions 함수 사용)
        const redCandidates = getCandidatePositions(
            current.redPos,
            current.redVisited,
            redEnd,
            maze,
            w,
        );
        const blueCandidates = getCandidatePositions(
            current.bluePos,
            current.blueVisited,
            blueEnd,
            maze,
            w,
        );

        for (const newRedPos of redCandidates) {
            for (const newBluePos of blueCandidates) {
                // 7. 같은 칸 이동 체크
                if (
                    newRedPos[0] === newBluePos[0] &&
                    newRedPos[1] === newBluePos[1]
                ) {
                    continue;
                }

                // 8. 자리 맞바꿈 체크
                if (
                    newRedPos[0] === current.bluePos[0] &&
                    newRedPos[1] === current.bluePos[1] &&
                    newBluePos[0] === current.redPos[0] &&
                    newBluePos[1] === current.redPos[1]
                ) {
                    continue;
                }

                // 9. newRedVisited, newBlueVisited 계산
                const newRedVisited =
                    current.redVisited |
                    (1 << (newRedPos[0] * w + newRedPos[1]));
                const newBlueVisited =
                    current.blueVisited |
                    (1 << (newBluePos[0] * w + newBluePos[1]));

                // 10. newStateKey 만들기
                const newStateKey = `${newRedPos[0]},${newRedPos[1]}/${newRedVisited}/${newBluePos[0]},${newBluePos[1]}/${newBlueVisited}`;

                // 11. 이미 방문한 상태면 continue
                if (visitedStates.has(newStateKey)) {
                    continue;
                }

                // 12. visitedStates에 추가 + queue에 새 상태 push
                visitedStates.add(newStateKey);
                queue.push({
                    redPos: newRedPos,
                    bluePos: newBluePos,
                    redVisited: newRedVisited,
                    blueVisited: newBlueVisited,
                    moves: current.moves + 1,
                });
            }
        }
    }
    // 13. 큐가 다 빌 때까지 못 찾았으면 0 반환
    return 0;
}

// 6번에서 쓰이는 각 수레의 후보 위치를 구하는 단독 헬퍼 함수
function getCandidatePositions(pos, visited, endPos, maze, w) {
    // 수레가 이미 목적지에 도착해 있다면 다음 턴에도 움직이지 않고 제자리에 고정
    if (pos[0] === endPos[0] && pos[1] === endPos[1]) {
        return [pos];
    }

    const candidates = [];
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
        const nr = pos[0] + dr[i];
        const nc = pos[1] + dc[i];

        if (nr < 0 || nr >= maze.length || nc < 0 || nc >= w) continue;
        if (maze[nr][nc] === 5) continue; // 벽인 경우 제외

        const nextIndex = nr * w + nc;
        if ((visited & (1 << nextIndex)) !== 0) continue; // 방문했던 칸 제외

        candidates.push([nr, nc]);
    }
    return candidates;
}
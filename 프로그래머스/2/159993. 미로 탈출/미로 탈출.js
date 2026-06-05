function bfs(maps, start, end) {
    const m = maps.length;
    const n = maps[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const queue = [[start[0], start[1], 0]];
    visited[start[0]][start[1]] = true;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        // 도착점에 도달하면 거리 반환
        if (x === end[0] && y === end[1]) return dist;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 범위 체크, 방문 여부, 벽 여부 확인
            if (
                nx >= 0 &&
                nx < m &&
                ny >= 0 &&
                ny < n &&
                !visited[nx][ny] &&
                maps[nx][ny] !== 'X'
            ) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    return -1; // 도달 불가
}

function solution(maps) {
    const m = maps.length;
    const n = maps[0].length;

    let start, lever, exit;

    // 시작점(S), 레버(L), 출구(E) 위치 찾기
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (maps[i][j] === 'S') start = [i, j];
            else if (maps[i][j] === 'L') lever = [i, j];
            else if (maps[i][j] === 'E') exit = [i, j];
        }
    }

    // BFS 1번: S -> L 최단 거리
    const tolever = bfs(maps, start, lever);
    if (tolever === -1) return -1;

    // BFS 2번: L -> E 최단거리
    const toExit = bfs(maps, lever, exit);
    if (toExit === -1) return -1;

    return tolever + toExit;
}
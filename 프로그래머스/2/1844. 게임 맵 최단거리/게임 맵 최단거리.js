function solution(maps) {
    const n = maps.length;      // 행의 개수
    const m = maps[0].length;   // 열의 개수

    // 4방향 이동 (상, 하, 좌, 우)
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // BFS를 위한 큐 [x, y, 거리]
    const queue = [[0, 0, 1]]; // 시작점 (0, 0)에서 거리 1로 시작
    maps[0][0] = 0; // 방문 표시 (벽으로 변경하여 재방문 방지)

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        // 목적지 도착
        if (x === n - 1 && y === m - 1) {
            return dist;
        }

        // 4방향 탐색
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 범위 체크 && 갈 수 있는 길인지 확인
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                queue.push([nx, ny, dist + 1]);
                maps[nx][ny] = 0; // 방문 표시
            }
        }
    }
    // 목적지에 도달할 수 없음
    return -1;
}
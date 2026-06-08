function solution(board) {
    const m = board.length;
    const n = board[0].length;

    let start, goal;

    // R(시작), G(목표) 위치 찾기
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'R') start = [i, j];
            else if (board[i][j] === 'G') goal = [i, j];
        }
    }

    // BFS
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const queue = [[start[0], start[1], 0]];
    visited[start[0]][start[1]] = true;

    const dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우
    const dy = [0, 0, -1, 1];

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        // 목표 도달
        if (x === goal[0] && y === goal[1]) return dist;

        // 4방향으로 슬라이딩
        for (let i = 0; i < 4; i++) {
            let nx = x,
                ny = y;

            // 장애물이나 벽에 부딪힐 때까지 미끄러지기
            while (true) {
                const nnx = nx + dx[i];
                const nny = ny + dy[i];

                // 벽 또는 장애물에 부딪히면 멈춤
                if (
                    nnx < 0 ||
                    nnx >= m ||
                    nny < 0 ||
                    nny >= n ||
                    board[nnx][nny] === 'D'
                ) {
                    break;
                }
                nx = nnx;
                ny = nny;
            }

            // 현재 위치와 다르고 방문하지 않은 경우만 추가
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return -1; // 도달 불가
}
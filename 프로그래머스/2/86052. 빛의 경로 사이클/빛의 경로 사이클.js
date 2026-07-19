function solution(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // ----- 방향 정의: 0=위, 1=오른쪽, 2=아래, 3=왼쪽 -----
    const dRow = [-1, 0, 1, 0];
    const dCol = [0, 1, 0, -1];

    // ----- 상태(행, 열, 방향)별 방문 여부 -----
    // visited[row][col][dir] 대신 1차원 index로 압축 저장
    const visited = new Uint8Array(rows * cols * 4);
    const getIndex = (r, c, d) => (r * cols + c) * 4 + d;

    const answer = [];

    // ----- 모든 상태를 순회하며 아직 방문 안 한 곳에서 사이클 탐색 시작 -----
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            for (let d = 0; d < 4; d++) {
                const startIndex = getIndex(r, c, d);
                if (visited[startIndex]) continue;

                // ----- 이 상태에서 시작하는 사이클 길이 측정 -----
                let cycleLength = 0;
                let curR = r,
                    curC = c,
                    curD = d;

                while (!visited[getIndex(curR, curC, curD)]) {
                    visited[getIndex(curR, curC, curD)] = 1;
                    cycleLength++;

                    // ----- 현재 칸의 문자에 따라 방향 갱신 -----
                    const cell = grid[curR][curC];
                    if (cell === 'L') {
                        curD = (curD + 3) % 4; // 좌회전(반시계 방향)
                    } else if (cell === 'R') {
                        curD = (curD + 1) % 4; // 우회전(시계 방향)
                    }
                    // 'S'는 방향 유지

                    // ----- 갱신된 방향으로 한 칸 이동 (격자 순환 처리) -----
                    curR = (curR + dRow[curD] + rows) % rows;
                    curC = (curC + dCol[curD] + cols) % cols;
                }
                answer.push(cycleLength);
            }
        }
    }
    return answer.sort((a, b) => a - b);
}
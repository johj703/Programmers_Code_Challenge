function solution(board, skill) {
    const n = board.length;
    const m = board[0].length;

    // ----- 여유 공간을 1칸씩 더 둔 차분 배열(경계 밖 접근 방지용) -----
    const diff = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    // ----- 1. 각 스킬을 0(1)로 차분 배열에 표시 -----
    for (const [type, r1, c1, r2, c2, degree] of skill) {
        const value = type === 1 ? -degree : degree; // 공격이면 감소, 회복이면 증가

        diff[r1][c1] += value;
        diff[r1][c2 + 1] -= value;
        diff[r2 + 1][c1] -= value;
        diff[r2 + 1][c2 + 1] += value;
    }

    // ----- 2. 가로 방향 누적합(각 행마다 왼쪽부터 오른쪽으로 누적) -----
    for (let r = 0; r <= n; r++) {
        for (let c = 1; c <= m; c++) {
            diff[r][c] += diff[r][c - 1];
        }
    }

    // ----- 3. 세로 방향 누적합(각 열마다 위쪽부터 아래쪽으로 누적) -----
    for (let c = 0; c <= m; c++) {
        for (let r = 1; r <= n; r++) {
            diff[r][c] += diff[r - 1][c];
        }
    }

    // ----- 4. board의 각 칸에 최종 변화량을 더해서, 1 이상인 칸의 개수 세기 -----
    let count = 0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (board[r][c] + diff[r][c] >= 1) count++;
        }
    }

    return count;
}
function solution(n) {
    let count = 0;
    const queens = [];  // queen[row] = col (각 행에 배치된 퀸의 열 위치)

    // 현재 위치에 퀸을 놓을 수 있는지 확인
    const isValid = (row, col) => {
        for (let r = 0; r < row; r++) {
            const c = queens[r];
            // 같은 열 또는 대각선이면 공격 가능!
            if (c === col || Math.abs(r - row) === Math.abs(c - col)) {
                return false;
            };
        }
        return true;
    };

    const backtrack = (row) => {
        // 모든 행에 퀴능ㄹ 배치했으면 카운트
        if (row === n) {
            count++;
            return;
        }

        // 현재 행의 각 열에 퀸 배치 시도
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                queens[row] = col;      // 퀸 배치
                backtrack(row + 1);     // 다음 행으로
                // 다음 col 시도 시 자동으로 queens[row] 덮어 씀 (백 트래킹)
            }
        }
    };
    backtrack(0);
    return count;
}
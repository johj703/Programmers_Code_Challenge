function solution(board) {
    const n = board.length;

    // 좌표 쌍을 정규화된 문자열 키로 변환 (두 좌표 중 더 작은 것을 앞에 오도록 정렬)
    function makeKey(r1, c1, r2, c2) {
        if (r1 > r2 || (r1 === r2 && c1 > c2)) {
            [r1, c1, r2, c2] = [r2, c2, r1, c1];
        }
        return `${r1},${c1},${r2},${c2}`;
    }

    function isValid(r, c) {
        return r >= 0 && r < n && c >= 0 && c < n && board[r][c] === 0;
    }

    // 현재 상태(두 칸)에서 이동/회전으로 갈 수 잇는 모든 다음 상태를 반환
    function getNextStates(r1, c1, r2, c2) {
        const next = [];

        // 이동: 상하좌우로 두 칸을 함께 밀기
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        for (const [dr, dc] of directions) {
            const nr1 = r1 + dr,
                nc1 = c1 + dc;
            const nr2 = r2 + dr,
                nc2 = c2 + dc;
            if (isValid(nr1, nc1) && isValid(nr2, nc2)) {
                next.push([nr1, nc1, nr2, nc2]);
            }
        }

        if (r1 === r2) {
            // 가로 상태(같은 행): 위/아래로 회전 가능
            for (const dr of [-1, 1]) {
                const nr = r1 + dr;
                // 회전하려면 두 칸의 대각선 방향(위 또는 아래) 모두 벽이 없어야 함
                if (isValid(nr, c1) && isValid(nr, c2)) {
                    next.push([r1, c1, nr, c1]); // c1을 축으로 회전
                    next.push([r2, c2, nr, c2]); // c2을 축으로 회전
                }
            }
        } else {
            // 세로 상태(같은 열): 좌/우 회전 가능
            for (const dc of [-1, 1]) {
                const nc = c1 + dc;
                if (isValid(r1, nc) && isValid(r2, nc)) {
                    next.push([r1, c1, r1, nc]); // r1을 축으로 회전
                    next.push([r2, c2, r2, nc]); // r2을 축으로 회전
                }
            }
        }
        return next;
    }

    const visited = new Set();
    const startKey = makeKey(0, 0, 0, 1);
    visited.add(startKey);

    let queue = [[0, 0, 0, 1]];
    let time = 0;

    while (queue.length > 0) {
        const nextQueue = [];

        for (const [r1, c1, r2, c2] of queue) {
            // 두 칸 중 어느 한 칸이라도 (n-1, n-1)에 도착하면 완료
            if (
                (r1 === n - 1 && c1 === n - 1) ||
                (r2 === n - 1 && c2 === n - 1)
            ) {
                return time;
            }

            for (const [nr1, nc1, nr2, nc2] of getNextStates(r1, c1, r2, c2)) {
                const key = makeKey(nr1, nc1, nr2, nc2);
                if (!visited.has(key)) {
                    visited.add(key);
                    nextQueue.push([nr1, nc1, nr2, nc2]);
                }
            }
        }
        queue = nextQueue;
        time++;
    }
    // 문제 조건상 도달하지 않음(항상 도작 가능)
    return -1;
}
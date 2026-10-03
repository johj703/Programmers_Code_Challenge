// -------------------------------------------------------------------------------------------------------------
function solution(board, aloc, bloc) {
    return playGame(board, aloc, bloc).turns;
};


// -------------------------------------------------------------------------------------------------------------
/*
    board: 현재 게임판 상태(2차원 배열)
    currLoc: [r, c] 현재 차례인 플레이어의 위치
    oppLoc: [r, c] 대기 중인 상대 플레이어의 위치
*/
function playGame(board, currLoc, oppLoc) {
    const [r, c] = currLoc;

    // 기저 사례1: 내가 딛고 서 있는 칸의 발판이 이미 소멸된 경우(자폭 패배 조건)
    // 상하좌우를 검사해 볼 필요도 없이 즉시 패배 처리함
    if (board[r][c] === 0) {
        return { win: false, turns: 0 };
    }

    const maxR = board.length;
    const maxC = board[0].length;

    // 상, 하, 좌, 우 4방향 이동 변화량
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    let canMove = false; // 갈 수 있는 유효한 칸이 하나라도 있는지 체크하는 플래그

    // 상하좌우 4방향을 훑으며 단 한 칸이라도 이동할 수 있는 발판이 있는지 확인
    for (let d = 0; d < 4; d++) {
        const nr = r + dr[d];
        const nc = c + dc[d];

        // 보드판 범위 내부이고, 그 칸에 발판(1)이 온전히 살아있다면 이동 가능
        if (nr >= 0 && nr < maxR && nc >= 0 && nc < maxC) {
            if (board[nr][nc] === 1) {
                canMove = true;
                break; // 한 군데라도 갈 수 있다면 루프를 조기 종료함.
            }
        }
    }

    // 기저 사례2: 상하좌우 4칸이 전부 막혔거나 발판이 없는 경우(이동 불가 패배 조건)
    // 0턴을 누적하며 즉시 패배를 반환
    if (!canMove) {
        return { win: false, turns: 0 };
    }

    // -------------------------------------------------------------------------------------------------------------

    let canWin = false; // 내가 이길 수 있는 경로가 하나라도 잇는지 판단하는 플래그
    let minTurns = Infinity; // 내가 이길 수 있을 때, 가장 빨리 이기는 턴 수(최소값)
    let maxTurns = 0; // 내가 지게 될 때, 가장 오래 버티는 턴 수(최대값)

    // 4방향을 다시 순회하면서 유효한 이동 후보지로 백트래킹을 시작
    for (let d = 0; d < 4; d++) {
        const nr = r + dr[d];
        const nc = c + dc[d];

        // 범위 내부이고 발판(1)이 살아있는 유효한 이동 후보지인 경우
        if (
            nr >= 0 &&
            nr < maxR &&
            nc >= 0 &&
            nc < maxC &&
            board[nr][nc] === 1
        ) {
            // 1. 백트래킹 - 현재 내가 서 있던 칸의 팔판을 임시로 없애기
            board[r][c] = 0;

            // 2. 재귀호출 - 공수 교대 규칙에 맞춰 인자를 스왑하여 다음 턴(상대방)의 결과를 받아옴
            // 나는 [nr, nc]로 이동했으므로 상대방 관점에서는 [nr, nc]가 상대방 위치(oppLoc)가 됨
            const nextResult = playGame(board, oppLoc, [nr, nc]);

            // 3. 원상 복구 - 탐색을 마쳤으므로 다음 방향 분기를 위해 발판을 다시 되살림
            board[r][c] = 1;

            // 4. 의사결정 및 턴 수 구분 집계
            // 상대방의 재귀 결과가 패배(nextResult.win === false)라면, 내가 이기는 수를 찾아낸 것!
            if (!nextResult.win) {
                canWin = true;
                minTurns = Math.min(minTurns, nextResult.turns); // 최대한 빨리 이기는 턴 선택
            } else {
                // 어떤 칸으로 가도 상대방이 다 이긴다면(nextResult.win === true), 내가 지는 상황
                maxTurns = Math.max(maxTurns, nextResult.turns); // 최대한 오래 버티는 턴 선택
            }
        }
    }

    if (canWin) {
        return { win: true, turns: minTurns + 1 };
    } else {
        return { win: false, turns: maxTurns + 1 };
    }
}

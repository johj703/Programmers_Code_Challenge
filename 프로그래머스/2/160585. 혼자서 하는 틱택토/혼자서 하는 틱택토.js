function solution(board) {
    // 1. O, X 개수 세기
    let oCount = 0,
        xCount = 0;
    for (const row of board) {
        for (const c of row) {
            if (c === 'O') oCount++;
            if (c === 'X') xCount++;
        }
    }

    // 2. 개수 조건: O는 X보다 같거나 1개 많아야 함
    if (oCount !== xCount && oCount !== xCount + 1) return 0;

    // 3. 승리 여부 체크 함수
    const checkWin = (player) => {
        // 가로, 세로
        for (let i = 0; i < 3; i++) {
            if (
                board[i][0] === player &&
                board[i][1] === player &&
                board[i][2] === player
            )
                return true;
            if (
                board[0][i] === player &&
                board[1][i] === player &&
                board[2][i] === player
            )
                return true;
        }
        // 대각선
        if (
            board[0][0] === player &&
            board[1][1] === player &&
            board[2][2] === player
        )
            return true;
        if (
            board[0][2] === player &&
            board[1][1] === player &&
            board[2][0] === player
        )
            return true;
        return false;
    };

    const oWin = checkWin('O');
    const xWin = checkWin('X');

    // 4. 동시 승리 불가능
    if (oWin && xWin) return 0;

    // 5. X가 승리했다면 O와 X 개수가 같아야 함 (O 차례에서 안 둠)
    if (xWin && oCount !== xCount) return 0;

    // 6. O가 승리했다면 O가 X보다 1개 많아야 함 (O가 마지막에 둬서 승리)
    if (oWin && oCount !== xCount + 1) return 0;

    return 1;
}
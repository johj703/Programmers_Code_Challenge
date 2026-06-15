function solution(board) {
    const m = board.length;
    const n = board[0].length;
    let maxSide = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                // 첫 행/열은 그대로 유지
                if (i > 0 && j > 0) {
                    board[i][j] =
                        Math.min(
                            board[i - 1][j], // 위
                            board[i][j - 1], // 왼쪽
                            board[i - 1][j - 1], // 대각선
                        ) + 1;
                }
                maxSide = Math.max(maxSide, board[i][j]);
            }
        }
    }
    return maxSide * maxSide; // 넓이 = 변의 길이²
}
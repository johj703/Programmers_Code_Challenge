function solution(board) {
    // 안전한 지역의 칸 수를 세는 변수
    let answer = 0;
    // 지뢰 주변 8방향(상하좌우 + 대각선)의 상대 좌표
    const dangerArea = [
        // 상, 하, 좌, 우
        [-1, 0], [1, 0], [0, 1], [0, -1],
        // 우상, 우하, 좌하, 좌상 대각선
        [-1, 1],[1, 1],[1, -1],[-1, -1]
    ];
    
    // 보드의 모든 칸을 순회
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            // 현재 칸이 지뢰(1)인 경우
            if(board[i][j] == 1){
                // 지뢰 주변 8방향을 모두 확인
                dangerArea.map((v) => {
                    let [x, y] = v;
                    // 현재 지뢰 위치를 기준으로 실제 좌표 계산
                    [x, y] = [x + i, y + j];
                    
                    // 계산된 좌표가 보드 범위 내에 있고, 빈 칸(0)인 경우
                    if (
                    x >= 0 &&
                    x < board.length &&
                    y >= 0 &&
                    y < board[i].length &&
                    board[x][y] == 0
                    )
                        // 위험지역으로 표시(2로 변경)
                        board[x][y] = 2;
                });
            }
        }
    }
    // 최종적으로 0인 칸(안전한 지역)의 개수 세기
    board.map(v1 => v1.map(v2 => v2 == 0 ? answer++ : 0))
    return answer;
}
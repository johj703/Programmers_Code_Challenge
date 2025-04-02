function solution(board, k) {
    var answer = 0;
    // 배열의 모든 행을 순회
    for(let i = 0; i < board.length; i += 1){
        // 각 행의 모든 열을 순회
        for(let j = 0; j < board[0].length; j += 1) {
            // 행 index(i)와 열 index(j)의 합이 k 이하인 경우에만
            if(i + j <= k) {
                // 해당 요소의 값을 answer에 더하기
                answer += board[i][j];
            }
        }
    }
    return answer;
}
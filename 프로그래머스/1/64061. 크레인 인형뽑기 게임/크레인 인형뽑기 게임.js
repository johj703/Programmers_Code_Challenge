function solution(board, moves) {
    let answer = 0;
    const basket = []; // 바구니(스택)

    for (const move of moves) {
        const col = move - 1; // 0 - index로 변환

        // 해당 열에서 가장 위에 있는 인형 찾기
        for (let row = 0; row < board.length; row++) {
            const doll = board[row][col];

            // 인형이 있으면 (0이 아니면)
            if (doll !== 0) {
                // board에서 인형 제거
                board[row][col] = 0;

                // 바구니에 추가
                basket.push(doll);

                // 바구니 맨 위 2개가 같은지 확인
                const len = basket.length;
                if (len >= 2 && basket[len - 1] === basket[len - 2]) {
                    // 같으면 2개 제거
                    basket.pop();
                    basket.pop();
                    answer += 2; // 터진 인형 개수
                }
                break; // 인형을 집었으니 다음 move로
            }
        }
    }
    return answer;
}
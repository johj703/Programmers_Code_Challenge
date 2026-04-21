function solution(signals) {
    const n = signals.length;
    const MAX_TIME = 10000000 // 충분히 큰 시간 제한
    
    // 1초부터 시작해서 모든 신호등이 노란불인 시각 찾기
    for(let t = 1; t <= MAX_TIME; t++) {
        let allYellow = true;
        
        // 모든 신호등이 노란불인지 확인
        for(let i = 0; i < n; i++) {
            const [G, Y, R] = signals[i];
            const period = G + Y + R;   // 전체 주기
            
            // t초에서 현재 신호등의 위치 (1부터 period까지 순환)
            const position = (t - 1) % period + 1;
            
            // 노란불 구간: G < position <= G + Y
            if (position <= G || position > G + Y) {
                allYellow = false;
                break;
            }
        }
        
        // 모든 신호등이 노란불이면 현재 시각 반환
        if (allYellow) {
            return t;
        }
    }
    // 찾지 못한 경우
    return -1;
}

// ===== 테스트 코드 =====
console.log(solution([[2, 1, 2], [5, 1, 1]]));
console.log(solution([[2, 3, 2], [3, 1, 3], [2, 1, 1]]));
console.log(solution([[3, 3, 3], [5, 4, 2], [2, 1, 2]]));
console.log(solution([[1, 1, 4], [2, 1, 3], [3, 1, 2], [4, 1, 1]]));
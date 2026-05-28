function solution(land) {
    const n = land.length;

    // 2행부터 DP 계산
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 4; j++) {
            // j열 제외한 이전 행의 최대값
            let maxPrev = 0;
            for (let k = 0; k < 4; k++) {
                if (k !== j) {
                    maxPrev = Math.max(maxPrev, land[i - 1][k]);
                }
            }
            // 현재 칸 + 이전 행 최대값
            land[i][j] += maxPrev;
        }
    }
    // 마지막 행의 최대값 반환
    return Math.max(...land[n - 1]);
}
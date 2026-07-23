function solution(triangle) {
    const n = triangle.length;

    // ----- 아래에서 두 번째 줄부터 맨 위 줄까지 거꾸로 순회 -----
    for (let row = n - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            // ----- "현재 칸 + 바로 아래 두 칸 중 더 큰 값"을 누적 -----
            triangle[row][col] += Math.max(
                triangle[row + 1][col],
                triangle[row + 1][col + 1],
            );
        }
    }

    // ----- 맨 위 칸에 "꼭대기부터 바닥까지의 최대 합"이 누적되어 있음 -----
    return triangle[0][0];
}
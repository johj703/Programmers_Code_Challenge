function solution(m, n, board) {
    // 2D 배열로 변환
    const grid = board.map((row) => row.split(''));
    let count = 0;

    while (true) {
        // 1. 제거할 블록 찾기
        const toRemove = Array.from({ length: m }, () => Array(n).fill(false));

        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const block = grid[i][j];
                // 2×2 모두 같은 블록인지 확인 (빈칸 제외)
                if (
                    block &&
                    block === grid[i][j + 1] &&
                    block === grid[i + 1][j] &&
                    block === grid[i + 1][j + 1]
                ) {
                    toRemove[i][j] = true;
                    toRemove[i][j + 1] = true;
                    toRemove[i + 1][j] = true;
                    toRemove[i + 1][j + 1] = true;
                }
            }
        }

        // 2. 제거할 블록이 없으면 종료
        const removed = toRemove.flat().filter(Boolean).length;
        if (removed === 0) break;

        count += removed;

        // 3. 블록 제거 (빈칸으로 변경)
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (toRemove[i][j]) grid[i][j] = '';
            }
        }

        // 4. 블록 떨어지기 (열별로 처리)
        for (let j = 0; j < n; j++) {
            // 빈킨이 아닌 블록만 추출
            const blocks = grid
                .map((row) => row[j])
                .filter((cell) => cell !== '');

            // 위쪽 빈칸 + 아래쪽 블록으로 채우기
            for (let i = 0; i < m; i++) {
                grid[i][j] =
                    i < m - blocks.length
                        ? ''
                        : blocks[i - (m - blocks.length)];
            }
        }
    }
    return count;
}
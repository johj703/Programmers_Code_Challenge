function solution(land) {
    const n = land.length;
    const m = land[0].length;

    const label = Array.from({ length: n }, () => Array(m).fill(0));
    const oilSize = [0]; // oilSize[id] = 해당 덩어리 크기 (id=0은 빈 땅)
    let id = 1;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // 1. BFS로 모든 석유 덩어리에 ID 부여 + 크기 저장
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 1 && label[i][j] === 0) {
                // 새로운 덩어리 발견! BFS 시작
                const queue = [[i, j]];
                label[i][j] = id;
                let size = 0;
                let head = 0;

                while (head < queue.length) {
                    const [x, y] = queue[head++];
                    size++;

                    for (let d = 0; d < 4; d++) {
                        const nx = x + dx[d];
                        const ny = y + dy[d];
                        if (
                            nx >= 0 &&
                            nx < n &&
                            ny >= 0 &&
                            ny < m &&
                            land[nx][ny] === 1 &&
                            label[nx][ny] === 0
                        ) {
                            label[nx][ny] = id;
                            queue.push([nx, ny]);
                        }
                    }
                }

                oilSize.push(size); // oilSize[id] = size
                id++;
            }
        }
    }

    // 2. 각 열마다 만나는 덩어리 크기 합산 (중복 방지!)
    let maxOil = 0;

    for (let j = 0; j < m; j++) {
        const seen = new Set();
        let total = 0;

        for (let i = 0; i < n; i++) {
            const oilId = label[i][j];
            if (oilId !== 0 && !seen.has(oilId)) {
                seen.add(oilId);
                total += oilSize[oilId];
            }
        }
        maxOil = Math.max(maxOil, total);
    }
    return maxOil;
}
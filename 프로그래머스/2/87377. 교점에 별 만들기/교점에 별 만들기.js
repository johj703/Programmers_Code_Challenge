function solution(line) {
    const n = line.length;
    const foundPoints = [];
    const seen = new Set(); // 중복 교점 좌표 방지용

    let minX = Infinity,
        maxX = -Infinity;
    let minY = Infinity,
        maxY = -Infinity;

    // ----- 1. 모든 직선 쌍의 교점 계산 -----
    for (let i = 0; i < n; i++) {
        const [A1, B1, C1] = line[i];

        for (let j = i + 1; j < n; j++) {
            const [A2, B2, C2] = line[j];

            // "분모 = A1 * B2 - B1 * A2" (0이면 평행 또는 일치)
            const denom = A1 * B2 - B1 * A2;
            if (denom === 0) continue;

            const xNum = B1 * C2 - C1 * B2;
            const yNum = C1 * A2 - A1 * C2;

            // ----- 2. 정수 좌표인지 확인 (나누어 떨어지는지) -----
            if (xNum % denom !== 0 || yNum % denom !== 0) continue;

            const x = xNum / denom;
            const y = yNum / denom;

            // ----- 3. 중복 제거 후 좌표 저장 -----
            const key = x + ',' + y;
            if (seen.has(key)) continue;
            seen.add(key);
            foundPoints.push([x, y]);

            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
        }
    }

    // ----- 4. 격자 크기 결정 -----
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    const grid = Array.from({ length: height }, () =>
        new Array(width).fill('.'),
    );

    // ----- 5. 격자에 별 찍기 (y축은 위로 갈수록 커지므로 행 방향을 뒤집어 매핑) -----
    for (const [x, y] of foundPoints) {
        const col = x - minX;
        const row = maxY - y; // "y가 클수록 위쪽 (행 번호가 작음)"
        grid[row][col] = '*';
    }

    return grid.map((row) => row.join(''));
}
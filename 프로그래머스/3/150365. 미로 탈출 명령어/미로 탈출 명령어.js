function solution(n, m, x, y, r, c, k) {
    // 목표(r, c)까지의 맨해튼 거리
    function manhattan(px, py) {
        return Math.abs(px - r) + Math.abs(py - c);
    }

    // (px, py)에서 rem번 이동으로 목표에 정확히 도달 가능한지 판별
    function feasible(px, py, rem) {
        const dist = manhattan(px, py);
        return dist <= rem && (rem - dist) % 2 === 0;
    }

    // 시작점 차제가 애초에 불가능하면 바로 종료
    if (!feasible(x, y, k)) return 'impossible';

    // 알파벳 순서(d, l, r, u)로 시도해야 사전순 최소 경로가 됨
    const moves = [
        ['d', 1, 0], // 아래: 행 +1
        ['l', 0, -1], // 왼쪽: 열 -1
        ['r', 0, 1], // 오른쪽: 열 +1
        ['u', -1, 0], // 위: 행 -1
    ];

    let path = '';
    let px = x,
        py = y,
        rem = k;

    while (rem > 0) {
        for (const [ch, dx, dy] of moves) {
            const nx = px + dx;
            const ny = py + dy;

            // 격자 범위(n-1, 1-m)를 벗어나면 스킵
            if (nx < 1 || nx > n || ny < 1 || ny > m) continue;

            // 이 칸으로 이동한 뒤에도 남은 걸음으로 도달 가능한지 확인
            if (feasible(nx, ny, rem - 1)) {
                path += ch;
                px = nx;
                py = ny;
                rem--;
                break; // 알파벳순 가장 빠른 유효 방향을 찾았으므로 다음 걸음으로
            }
        }
    }

    return path;
}
function solution(name) {
    const n = name.length;

    // 1. 상하 이동: 각 문자별 최소 조작 횟수
    let verticalMoves = 0;
    for (const c of name) {
        const idx = c.charCodeAt(0) - 65;   // A = 0, Z = 25
        verticalMoves += Math.min(idx, 26 - idx);
    }

    // 2. 좌우 이동: 기본은 오른쪽으로 쭉 (n - 1번)
    let horizontalMoves = n - 1;

    for (let i = 0; i < n; i++) {
        // i 이후 연속 A 구간의 끝 위치 찾기
        let next = i + 1;
        while (next < n && name[next] === 'A') next++;

        // 방법1: 오른쪽으로 i번 -> 되돌아 i번 -> 왼쪽으로 (n-next)번
        const way1 = 2 * i + (n - next);

        // 방법2: 왼쪽으로 (n - next)번 -> 되돌아 (n - next)번 -> 오른쪽으로 i번
        const way2 = i + 2 * (n - next);

        horizontalMoves = Math.min(horizontalMoves, way1, way2);
    }
    return verticalMoves + horizontalMoves;
}
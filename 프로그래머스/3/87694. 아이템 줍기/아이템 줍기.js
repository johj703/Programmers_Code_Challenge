function solution(rectangle, characterX, characterY, itemX, itemY) {
    const SIZE = 102; // 최대 좌표 50 -> x2 = 100, 여유분 포함해서 102
    const board = Array.from({ length: SIZE }, () => new Array(SIZE).fill(0));

    // 1단계: 각 직사각형의 내부 + 테두리를 전부 1로 채움 (전체 합집합 표시)
    for (const [x1, y1, x2, y2] of rectangle) {
        for (let x = x1 * 2; x <= x2 * 2; x++) {
            for (let y = y1 * 2; y <= y2 * 2; y++) {
                board[x][y] = 1;
            }
        }
    }

    // 2단계: 각 직사각형의 순수 내부(테두리 제외)만 다시 0으로 지움
    for (const [x1, y1, x2, y2] of rectangle) {
        for (let x = x1 * 2 + 1; x <= x2 * 2 - 1; x++) {
            for (let y = y1 * 2 + 1; y <= y2 * 2 - 1; y++) {
                board[x][y] = 0;
            }
        }
    }

    // 3단계: BFS로 캐릭터 위치 -> 아이템 위치까지 테두리(1인 칸)를 따라 최단 거리 탐색
    const startX = characterX * 2;
    const startY = characterY * 2;
    const endX = itemX * 2;
    const endY = itemY * 2;

    const visited = Array.from({ length: SIZE }, () =>
        new Array(SIZE).fill(false),
    );
    const queue = [[startX, startY, 0]];
    visited[startX][startY] = true;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        if (x === endX && y === endY) {
            return dist / 2; // x2 했던 좌표를 다시 원래 단위로 환산
        }

        for (let d = 0; d < 4; d++) {
            const nx = x + dx[d];
            const ny = y + dy[d];
            if (
                nx >= 0 &&
                nx < SIZE &&
                ny >= 0 &&
                ny < SIZE &&
                board[nx][ny] === 1 &&
                !visited[nx][ny]
            ) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    return -1; // 문제 조건 상 도달하지 못하는 경우는 없음(안정장치)
}
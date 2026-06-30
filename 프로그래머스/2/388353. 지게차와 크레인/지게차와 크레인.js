function solution(storage, requests) {
    const n = storage.length;
    const m = storage[0].length;

    // 문자열 배열을 수정 가능한 2D 배열로 변환
    const grid = storage.map((row) => row.split(''));

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // 외부(가상의 테두리 바깥)와 연결된 빈칸 영역을 BFS로 찾기
    const getOutsideEmpty = () => {
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        const queue = [];

        // 테두리에 있는 빈칸들을 시작점으로 추가
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                const isEdge = i === 0 || i === n - 1 || j === 0 || j === m - 1;
                if (isEdge && grid[i][j] === '.' && !visited[i][j]) {
                    visited[i][j] = true;
                    queue.push([i, j]);
                }
            }
        }

        // BFS로 빈칸을 통해 퍼지는 영역 확장
        let head = 0;
        while (head < queue.length) {
            const [x, y] = queue[head++];
            for (let d = 0; d < 4; d++) {
                const nx = x + dx[d],
                    ny = y + dy[d];
                if (
                    nx >= 0 &&
                    nx < n &&
                    ny >= 0 &&
                    ny < m &&
                    !visited[nx][ny] &&
                    grid[nx][ny] === '.'
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return visited; // true인 칸 = 외부와 연결된 빈 공간
    };

    for (const req of requests) {
        if (req.length === 2) {
            // 크레인: 해당 종류 모두 제거
            const type = req[0];
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (grid[i][j] === type) grid[i][j] = '.';
                }
            }
        } else {
            // 지게차: 외부와 연결된 빈 공간에 인접한 컨테이너만 제거
            const type = req;
            const outside = getOutsideEmpty();

            const toRemove = [];
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (grid[i][j] === type) {
                        // 4방향 중 외부 연결 빈공간과 맞닿아 있는지 확인
                        for (let d = 0; d < 4; d++) {
                            const nx = i + dx[d],
                                ny = j + dy[d];
                            const isOutsideBoundary =
                                nx < 0 || nx >= n || ny < 0 || ny >= m;
                            if (isOutsideBoundary || outside[nx]?.[ny]) {
                                toRemove.push([i, j]);
                                break;
                            }
                        }
                    }
                }
            }

            for (const [i, j] of toRemove) {
                grid[i][j] = '.';
            }
        }
    }

    // 남은 컨테이너(빈칸 아닌 것) 개수 세기
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] !== '.') count++;
        }
    }
    return count;
}
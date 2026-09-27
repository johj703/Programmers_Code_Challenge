function solution(clockHands) {
    const n = clockHands.length;
    let minPresses = Infinity;
    const maxGuess = 4 ** n;

    // 헬퍼 함수1: 4진법 자릿수를 추출하는 함수
    function getFirstRowRotations(guess, n) {
        const rotations = [];
        for (let j = 0; j < n; j++) {
            const count = Math.floor(guess / 4 ** j) % 4;
            rotations.push(count);
        }
        return rotations;
    }

    // 헬퍼 함수2: 시계를 누르고 상하좌우를 돌리는 함수
    function pressClock(grid, r, c, n) {
        if (n === 0) return;
        const len = grid.length;
        const dr = [0, -1, 1, 0, 0];
        const dc = [0, 0, 0, -1, 1];

        for (let i = 0; i < 5; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            if (nr >= 0 && nr < len && nc >= 0 && nc < len) {
                grid[nr][nc] = (grid[nr][nc] + n) % 4;
            }
        }
    }

    // 메인 루프: 완전 탐색 및 연쇄 시뮬레이션
    for (let guess = 0; guess < maxGuess; guess++) {
        // 1번: 원본 격자 훼손 방지를 위해 매번 깊은 복사 진행
        const gridCopy = clockHands.map((row) => [...row]);
        let totalPresses = 0;

        // 2번: getFirstRowRotations로 1행의 조작 회수를 구하고 반영
        const firstRowRotations = getFirstRowRotations(guess, n);
        for (let j = 0; j < n; j++) {
            const count = firstRowRotations[j];
            if (count > 0) {
                pressClock(gridCopy, 0, j, count);
                totalPresses += count;
            }
        }

        // 3번: 2행부터 마지막 행까지 바로 윗행이 12시(0)가 되도록 연쇄 조작
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const upperClockDir = gridCopy[i - 1][j];
                const neededCount = (4 - upperClockDir) % 4;
                if (neededCount > 0) {
                    pressClock(gridCopy, i, j, neededCount);
                    totalPresses += neededCount;
                }
            }
        }

        // 4번: 모든 행 처리가 끝난 뒤, 마지막 행 전체가 12시(0)인지 index 없이 검증
        const isSuccess = gridCopy[n - 1].every((dir) => dir === 0);

        // 성공했다면 최소값 갱신
        if (isSuccess) {
            minPresses = Math.min(minPresses, totalPresses);
        }
    }
    return minPresses === Infinity ? -1 : minPresses;
}
function solution(m, n, startX, startY, balls) {
    const answer = [];

    for (const [x, y] of balls) {
        const distances = [];

        // ----- 아래쪽 벽(y = 0) 반사 -----
        /* "시작점을 y = 0 기준 대칭 -> (startX, -startY)"
        무효 조건: x좌표가 같고 "목표공이 시작점보다 아래(y < startY)"에 있을 때만
        (그 경우에만 벽에 닿기 전에 직선으로 먼저 목표공을 맞혀버림) */
        if (!(startX === x && y < startY)) {
            distances.push((startX - x) ** 2 + (startY + y) ** 2);
        }

        // ----- 위쪽 벽(y = n) 반사 -----
        /* "시작점을 y = n 기준 대칭 -> (startX, 2n - startY)"
        무효 조건: x좌표가 같고 "목표공이 시작점보다 위(y > startY)"에 있을 때만 */
        if (!(startX === x && y > startY)) {
            distances.push((startX - x) ** 2 + (2 * n - startY - y) ** 2);
        }

        // ----- 왼쪽0 벽(x = 0) 반사 -----
        /* "시작점을 x = 0 기준 대칭 -> (-startX, startY)"
        무효 조건: y좌표가 같고 "목표공이 시작점보다 왼쪽(x < startX)"에 있을 때만 */
        if (!(startY === y && x < startX)) {
            distances.push((startX + x) ** 2 + (startY - y) ** 2);
        }

        // ----- 위쪽 벽(x = m) 반사 -----
        /* "시작점을 x = m 기준 대칭 -> (2m - startX, startY)"
        무효 조건: y좌표가 같고 "목표공이 시작점보다 오른쪽(x > startX)"일 때만 */
        if (!(startY === y && x > startX)) {
            distances.push((2 * m - startX - x) ** 2 + (startY - y) ** 2);
        }

        // ----- 4가지 (또는 2가지) 경우 중 최소값 저장 -----
        answer.push(Math.min(...distances));
    }
    return answer;
}
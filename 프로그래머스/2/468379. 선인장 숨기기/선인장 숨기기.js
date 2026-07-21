function solution(m, n, h, w, drops) {
    const total = drops.length;
    const blocked = new Uint8Array(m * n);
    const colHeight = new Int32Array(n);

    // ----- 현재 blocked 상태에서 빈 h × w 구역을 찾는 함수 -----
    // 찾으면 [위쪽 행, 왼쪽 열] 반환(가장 위쪽, 그 중 가장 왼쪽 우선), 없으면 null
    function findFreeRect() {
        colHeight.fill(0);

        for (let r = 0; r < m; r++) {
            let run = 0; // "높이 h 이상"인 열이 가로로 연속된 개수
            const rowBase = r * n;

            for (let c = 0; c < n; c++) {
                if (blocked[rowBase + c]) {
                    colHeight[c] = 0;
                    run = 0;
                } else {
                    colHeight[c]++;

                    if (colHeight[c] >= h) {
                        run++;
                        if (run >= w) {
                            /* "가장 위쪽 행"부터, 그 안에서 "가장 왼쪽 열"부터 찾으므로
                            처음 발견되는 순간이 곧 정답 후보 */
                            return [r - h + 1, c - w + 1];
                        }
                    } else {
                        run = 0;
                    }
                }
            }
        }
        return null;
    }

    // ----- 첫 x개의 빗방울만 blocked로 표시한 뒤 빈 구역 탐색 -----
    function feasible(x) {
        blocked.fill(0);
        for (let i = 0; i < x; i++) {
            const [r, c] = drops[i];
            blocked[r * n + c] = 1;
        }
        return findFreeRect();
    }

    // ----- 이분 탐색: 빈 구역이 존재하는 최대 x(xMax) 찾기 -----
    let lo = 0,
        hi = total;

    while (lo < hi) {
        const mid = Math.ceil((lo + hi) / 2);
        if (feasible(mid) !== null) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }

    // ----- 최종 xMax 상태에서 "가장 위쪽, 가장 왼쪽" 빈 구역이 정답 -----
    return feasible(lo);
}
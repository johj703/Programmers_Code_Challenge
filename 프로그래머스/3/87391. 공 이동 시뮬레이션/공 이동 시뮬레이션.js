function solution(n, m, x, y, queries) {
    const rowDeltas = []; // rowDeltas: 행에 영향을 주는 이동량(음수=감소, 양수=증가)만 순서대로 모음
    const colDeltas = []; // colDeltas: 열에 영향을 주는 이동량만 순서대로 모음

    for (const [command, dx] of queries) {
        if (command === 0) colDeltas.push(-dx);
        else if (command === 1) colDeltas.push(dx);
        else if (command === 2) rowDeltas.push(-dx);
        else rowDeltas.push(dx); // command === 3;
    }

    /* 시작 위치 start에서 deltas를 순서대로 적용했을 때(경계에서 멈춤) 최종 위치 */
    const simulate = (start, deltas, size) => {
        let pos = start;
        for (const delta of deltas) {
            pos += delta;
            if (pos < 0) pos = 0;
            else if (pos > size - 1) pos = size - 1;
        }
        return pos;
    };

    /*
        simulate(p)는 p에 대해 단조 비감소(p가 커지면 결과값도 커지거나 같음, 즉 절대 줄어들지 않음)이므로,
        "simulate(mid) >= value를 만족하는 최소 p"를 찾는 표준 lower bound 이분 탐색.
        (lo + hi)가 2^31을 넘을 수 있어 비트 시프트(>>) 대신 나눗셈으로 mid 계산
    */
    const lowerBound = (deltas, size, value) => {
        let low = 0;
        let high = size; // high === size는 "그런 위치가 없음"을 의미
        while (low < high) {
            const middle = Math.floor((low + high) / 2);
            if (simulate(middle, deltas, size) >= value) high = middle;
            else low = middle + 1;
        }
        return low;
    };

    /* simulate(p) === target을 만족하는 p의 개수 = 두 lower bound의 차이 (단조성 덕분에 항상 연속 구간) */
    const countMatches = (deltas, size, target) => {
        const from = lowerBound(deltas, size, target);
        const to = lowerBound(deltas, size, target + 1);
        return to - from;
    };

    const rowCount = countMatches(rowDeltas, n, x);
    const colCount = countMatches(colDeltas, m, y);

    /* rowCount * colCount는 최악의 경우(10억 × 10억) 10^18까지 커져 안전한 정수 범위(2^53)를 넘을 수 있음.
    BigInt로 곱한 뒤 Number로 다시 변환하면 그 순간 정밀도가 깨지므로, 변환하지 않고 BigInt 그대로 반환 */
    return BigInt(rowCount) * BigInt(colCount);
}
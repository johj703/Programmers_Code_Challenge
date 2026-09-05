function solution(a) {
    const n = a.length;
    if (n < 2) return 0;

    // 각 값의 등장 횟수 계산 (값의 범위가 0 이상 n 미만이라는 제한 이용)
    const count = new Int32Array(n);
    for (const v of a) count[v]++;

    // 등장 횟수가 있는 값들만 모아, 개수 내림차순으로 정렬 (개수 많은 후보부터 시도하기 위함)
    const candidates = [];
    for (let v = 0; v < n; v++) {
        if (count[v] > 0) candidates.push(v);
    }
    candidates.sort((x, y) => count[y] - count[x]);

    let best = 0; // 지금까지 찾은 스타 수열의 최대 길이

    for (const value of candidates) {
        /*
            이 값으로 만들 수 있는 최대 길이(2 × count[value])가 지금까지의 최대값을 넘을 수 없다면,
            이후 후보들은 count가 더 작으므로 절대 이길 수 없어 바로 종료
        */
        if (count[value] * 2 <= best) break;

        const removed = new Uint8Array(n); // 이 후보 전용 사용 여부 배열(매 후보마다 새로 초기화)
        let matched = 0; // 이 후보로 만들 수 있는 스타 수열의 길이
        let i = 0;

        while (i < n - 1) {
            if (!removed[i] && !removed[i + 1]) {
                const isV_i = a[i] === value;
                const isV_i1 = a[i + 1] === value;

                // 두 칸 중 정확히 하나만 value인 경우에만 짝지음(v와 v가 아닌 값의 쌍)
                if (isV_i !== isV_i1) {
                    removed[i] = 1;
                    removed[i + 1] = 1;
                    matched++;
                    i += 2;
                    continue;
                }
            }
            i++;
        }
        best = Math.max(best, matched * 2);
    }
    return best;
}
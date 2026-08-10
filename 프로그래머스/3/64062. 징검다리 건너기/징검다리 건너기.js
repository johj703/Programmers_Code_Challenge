function solution(stones, k) {
    // ----- 1. "X명이 건널 수 있는지" 판정하는 함수 -----
    const canCross = (x) => {
        let consecutiveWeak = 0; // "값 < x인 디딤돌"이 연속으로 몇 개 이어지는지

        for (const stone of stones) {
            if (stone < x) {
                consecutiveWeak++;
                if (consecutiveWeak >= k) return false; // k개 연속이면 그 구간을 못 건넘
            } else {
                consecutiveWeak = 0; // 연속이 끊김
            }
        }

        return true; // k개 연속이 없으므로 x명이 건널 수 있음
    };

    // ----- 이분 탐색: "건널 수 있는 최대 인원"을 찾기 -----
    let low = 1; // 최소 1명은 건널 수 있음

    // "reduce로 배열을 순회하며 최대값을 누적 계산"
    // (Math.max(...stones)는 배열이 크면 인자 개수 제한으로 런타임 에러 발생 → 사용 금지)
    let high = stones.reduce((max, cur) => Math.max(max, cur), 0);

    let answer = 0;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2); // 현재 인원 수(mid)로 건널 수 있는지 확인

        if (canCross(mid)) {
            answer = mid; // "mid명은 건널 수 있다" -> 더 많은 인원도 가능한지 시도
            low = mid + 1;
        } else {
            high = mid - 1; // "mid명은 못 건넌다" -> 더 적은 인원으로 시도
        }
    }

    return answer;
}
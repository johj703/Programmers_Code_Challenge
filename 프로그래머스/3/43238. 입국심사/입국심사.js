function solution(n, times) {
    // ----- "T분 안에 n명을 심시할 수 있는지"를 판정하는 함수 -----
    const canFinish = (time) => {
        let totalPeople = 0;

        for (const t of times) {
            totalPeople += Math.floor(time / t);
            if (totalPeople >= n) return true; // 조기 종료(불필요한 합산 방지)
        }

        return totalPeople >= n;
    };

    // ----- 이분 탐색 범위 설정 -----
    // "가장 빠른 심사관 1명이 혼자 n명을 다 처리하는 시간"을 상한으로 설정(충분히 넉넉한 값)
    const minTime = times.reduce((min, cur) => Math.min(min, cur), Infinity);

    let low = 1;
    let high = minTime * n;
    let answer = high;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (canFinish(mid)) {
            answer = mid; // "mid분이면 가능하다" -> 더 짧은 시간도 가능한지 시도
            high = mid - 1;
        } else {
            low = mid + 1; // "mid분으로는 부족하다" -> 더 긴 시간으로 시도
        }
    }

    return answer;
}
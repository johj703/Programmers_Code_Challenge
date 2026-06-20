function solution(diffs, times, limit) {
    const n = diffs.length;
    const limitBig = BigInt(limit);

    // 주어진 level로 모든 퍼즐을 푸는 데 걸리는 총 시간 계산
    const calculateTime = (level) => {
        let total = 0n;

        for (let i = 0; i < n; i++) {
            const diff = diffs[i];
            const timeCur = BigInt(times[i]);

            if (diff <= level) {
                total += timeCur;
            } else {
                const count = BigInt(diff - level);
                const timePrev = BigInt(times[i - 1]); // i = 0이면 diff = 1이라 항상 여기 안 옴!
                total += (timePrev + timeCur) * count + timeCur;
            }

            // 이미 limit 초과하면 더 계산할 필요 없음 (조기 종료)
            if (total > limitBig) return total;
        }
        return total;
    };

    // 이분탐색
    let left = 1;
    let right = diffs.reduce((max, d) => Math.max(max, d), 0);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (calculateTime(mid) <= limitBig) {
            right = mid; // 가능하면 더 작은 level 탐색
        } else {
            left = mid + 1; // 불가능하면 더 큰 level 필요
        }
    }

    return left;
}
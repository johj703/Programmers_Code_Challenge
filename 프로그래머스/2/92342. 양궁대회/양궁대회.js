function solution(n, info) {
    let bestDiff = 0; //  최대 점수 차
    let bestResult = [-1]; // 최적 결과

    // 2^11가지 조합 시도 (각 비트 = 해당 점수 구간 라이언이 이김)
    for (let mask = 1; mask < 1 << 11; mask++) {
        const ryan = Array(11).fill(0);
        let used = 0;

        // 라이언이 이기는 구건별 필요 화살 계산
        for (let i = 0; i < 11; i++) {
            if (mask & (1 << i)) {
                ryan[i] = info[i] + 1; // 어피치보다 1발 더
                used += ryan[i];
            }
        }

        // 화살이 n발을 초과하면 불가능
        if (used > n) continue;

        // 남은 화살은 0점 (index 10)에 몰아주기
        ryan[10] += n - used;

        // 점수 계산
        let ryanScore = 0,
            apeachScore = 0;
        for (let i = 0; i < 11; i++) {
            const score = 10 - i;
            if (ryan[i] > info[i]) ryanScore += score;
            else if (info[i] > 0) apeachScore += score;
        }

        const diff = ryanScore - apeachScore;

        // 최적해 갱신
        if (diff > bestDiff) {
            bestDiff = diff;
            bestResult = ryan;
        } else if (diff === bestDiff && diff > 0) {
            // 같은 점수 차 -> 낮은 점수 더 많이 맞힌 쪽 선택
            if (isLowerScoreBetter(ryan, bestResult)) {
                bestResult = ryan;
            }
        }
    }

    return bestResult;
}

// 낮은 점수(뒤 index)를 더 많이 맞힌 쪽이 우선!
const isLowerScoreBetter = (newResult, bestResult) => {
    for (let i = 10; i >= 0; i--) {
        if (newResult[i] !== bestResult[i]) {
            return newResult[i] > bestResult[i];
        }
    }
    return false;
};
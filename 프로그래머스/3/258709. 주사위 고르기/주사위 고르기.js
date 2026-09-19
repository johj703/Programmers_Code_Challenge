function solution(dice) {
    const n = dice.length;
    const half = n / 2;
    const indices = Array.from({ length: n }, (_, i) => i);

    // n개 중 half개를 고르는 모든 조합을 생성
    const combinations = [];
    function combine(start, picked) {
        if (picked.length === half) {
            combinations.push([...picked]);
            return;
        }
        for (let i = start; i < n; i++) {
            picked.push(indices[i]);
            combine(i + 1, picked);
            picked.pop();
        }
    }
    combine(0, []);

    // 주어진 주사위 index 목록(diceIdxList)의 합이 나올 수 있는 모든 경우를, "합 값 -> 등장 횟수" 배열로 집계
    function getSumDistribution(diceIdxList) {
        let sums = [0]; // 아직 아무 주사위도 안 굴렸을 때, 합은 0 하나뿐이므로
        for (const idx of diceIdxList) {
            const nextSums = [];
            for (const s of sums) {
                for (const face of dice[idx]) {
                    nextSums.push(s + face);
                }
            }
            sums = nextSums;
        }

        const maxSum = Math.max(...sums);
        const distribution = new Array(maxSum + 1).fill(0);
        for (const s of sums) distribution[s]++;
        return distribution;
    }

    let bestCombo = null;
    let bestWinCount = -1;

    for (const combo of combinations) {
        const comboSet = new Set(combo);
        const opponent = indices.filter((i) => !comboSet.has(i));

        const distA = getSumDistribution(combo);
        const distB = getSumDistribution(opponent);

        // B 분포의 누적합: prefixB[s] = B의 합이 s 이하로 나온 총 횟수
        const prefixB = new Array(distB.length).fill(0);
        prefixB[0] = distB[0];
        for (let s = 1; s < distB.length; s++) {
            prefixB[s] = prefixB[s - 1] + distB[s];
        }

        // A의 각 합(a)에 대해, B의 합이 a보다 작은 경우의 수를 모두 더해 승리 횟수 계산
        let winCount = 0;
        for (let a = 0; a < distA.length; a++) {
            if (distA[a] === 0) continue;
            const lessThanA =
                a - 1 < prefixB.length
                    ? a - 1 >= 0
                        ? prefixB[Math.min(a - 1, prefixB.length - 1)]
                        : 0
                    : prefixB[prefixB.length - 1];
            winCount += distA[a] * lessThanA;
        }

        if (winCount > bestWinCount) {
            bestWinCount = winCount;
            bestCombo = combo;
        }
    }

    // 주사위 번호는 1부터 시작하므로 +1, 오름차순 정렬
    return bestCombo.map((idx) => idx + 1).sort((x, y) => x - y);
}
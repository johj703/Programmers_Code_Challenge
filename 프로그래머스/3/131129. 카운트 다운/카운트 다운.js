function solution(target) {
    // 다트 한 번으로 만들 수 있는 모든 점수(1~60) 구하기
    const scores = [];
    for (let v = 1; v <= 60; v++) {
        const isSingle = v <= 20; // 싱글로 가능
        const isDouble = v <= 40 && v % 2 === 0; // 더블로 가능
        const isTriple = v <= 60 && v % 3 === 0; // 트리플로 가능
        const isBull = v === 50; // 불 가능
        if (isSingle || isDouble || isTriple || isBull) {
            scores.push(v);
        }
    }

    // "싱글 또는 불"로 카운트 되는 값인지 판별 (1-20은 항상 싱글로 던지는 것이 최선, 50은 불)
    const isSingleType = (v) => v <= 20 || v === 50;

    // dp[i].darts: i점을 만드는 최소 다트 수, dp[i].singles: 그때의 싱글/불 최대 개수
    const darts = new Array(target + 1).fill(Infinity);
    const singles = new Array(target + 1).fill(-1);
    darts[0] = 0; // 0점은 다트 0개로 가능
    singles[0] = 0; // 0점은 싱글/불 0개

    for (let i = 1; i <= target; i++) {
        for (const v of scores) {
            if (v > i) break; // scores는 오름차순이므로, 남은 값은 더 볼 필요 없음
            const prevDarts = darts[i - v];
            if (prevDarts === Infinity) continue; // 이전 점수가 불가능하면 건너뜀

            // cand = candidate(후보): v를 하나 더 던졌다고 가정했을 때 나오는 잠정적인 결과값
            // 여러 v를 시도해보며 그중 가장 좋은 후보를 골라 darts[i], singles[i]에 채택(갱신)하는 방식
            const candDarts = prevDarts + 1;
            const candSingles = singles[i - v] + (isSingleType(v) ? 1 : 0);

            if (
                candDarts < darts[i] ||
                (candDarts === darts[i] && candSingles > singles[i])
            ) {
                darts[i] = candDarts;
                singles[i] = candSingles;
            }
        }
    }
    return [darts[target], singles[target]];
}
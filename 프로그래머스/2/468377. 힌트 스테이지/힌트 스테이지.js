function solution(cost, hint) {
    const n = cost.length;
    const numBundles = hint.length; // n - 1

    // -----번들 정보 미리 분리-----
    const bundlePrice = hint.map((h) => h[0]); // 번들별 구매 가격
    const bundleTickets = hint.map((h) => h.slice(1)); // 번들에 든 힌트권 번호들

    let minTotal = Infinity;
    const numSubsets = 1 << numBundles; // 2^(n-1)

    // -----번들 구매 여부 조합을 비트마스크로 완전 탐색-----
    for (let mask = 0; mask < numSubsets; mask++) {
        // "스테이지 번호별 누적 힌트권 개수"   (1번 인덱스부터 사용)
        const ticketCount = new Array(n + 1).fill(0);
        let bundleCost = 0;

        // 현재 조합(mask)에서 구매한 번들들의 정보 반영
        for (let i = 0; i < numBundles; i++) {
            if (mask & (1 << i)) {
                bundleCost += bundlePrice[i];
                for (const stageNum of bundleTickets[i]) {
                    ticketCount[stageNum]++; // 같은 번호 중복 포함 가능
                }
            }
        }

        // -----각 스테이지 해결 비용 계산(힌트권 최대한 사용)-----
        let stageCost = 0;
        for (let stage = 1; stage <= n; stage++) {
            // "누적 힌트권 개수와 n-1 중 작은 값"만큼 사용 (최대 사용 개수 제한)
            const used = Math.min(ticketCount[stage], n - 1);
            stageCost += cost[stage - 1][used];
        }

        // -----총 비용(번들 구매비 + 스테이지 해결비) 최소값 갱신-----
        const total = bundleCost + stageCost;
        if (total < minTotal) minTotal = total;
    }

    return minTotal;
}
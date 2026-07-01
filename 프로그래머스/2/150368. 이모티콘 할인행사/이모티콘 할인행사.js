function solution(users, emoticons) {
    const discounts = [10, 20, 30, 40]; // 가능한 할인율
    const m = emoticons.length; // 이모티콘 개수

    let bestSubscribe = 0; // 최대 플러스 가입자 수
    let bestSales = 0; // 최대 판매액

    // 모든 할인율 조합을 재귀로 생성 (각 이모티콘마다 4가지)
    const tryAll = (idx, rates) => {
        if (idx === m) {
            // 현재 할인율 조합으로 시뮬레이션
            let subscribe = 0;
            let sales = 0;

            for (const [minRate, minPrice] of users) {
                let total = 0;

                // 해당 유저가 살 이모티콘 계산
                for (let i = 0; i < m; i++) {
                    if (rates[i] >= minRate) {
                        total += emoticons[i] * (1 - rates[i] / 100);
                    }
                }

                // 기준 가격 이상이면 플러스 가입
                if (total >= minPrice) {
                    subscribe++;
                } else {
                    sales += total;
                }
            }

            // 1순위: 가입자 수, 2순위: 판매액
            if (
                subscribe > bestSubscribe ||
                (subscribe === bestSubscribe && sales > bestSales)
            ) {
                bestSubscribe = subscribe;
                bestSales = sales;
            }
            return;
        }

        // 각 이모티콘에 4가지 할인율 적용해보기
        for (const d of discounts) {
            rates[idx] = d;
            tryAll(idx + 1, rates);
        }
    };
    tryAll(0, Array(m));

    return [bestSubscribe, bestSales];
}
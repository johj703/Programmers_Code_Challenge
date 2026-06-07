function getCombinations(arr, n) {
    if (n === 1) return arr.map((v) => [v]);

    const result = [];
    arr.forEach((v, i) => {
        const rest = arr.slice(i + 1);
        const combos = getCombinations(rest, n - 1);
        combos.forEach((combo) => result.push([v, ...combo]));
    });
    return result;
}

function solution(orders, course) {
    const result = [];

    // 각 order를 알파벳 순 정렬
    const sortedOrders = orders.map((order) => order.split('').sort().join(''));

    for (const size of course) {
        const countMap = new Map();

        // 각 주문에서 해당 크기의 조합 구하기
        for (const order of sortedOrders) {
            const combos = getCombinations(order.split(''), size);

            for (const combo of combos) {
                const key = combo.join('');
                countMap.set(key, (countMap.get(key) || 0) + 1);
            }
        }

        if (countMap.size === 0) continue;

        // 최대 빈도 찾기
        const maxCount = Math.max(...countMap.values());

        // 최소 2번 이상인 경우만 추가
        if (maxCount < 2) continue;

        // 최대 빈도인 조합 추가
        for (const [key, count] of countMap) {
            if (count === maxCount) result.push(key);
        }
    }

    // 사전순 정랼
    return result.sort();
}
function solution(gems) {
    const n = gems.length;
    const totalKinds = new Set(gems).size; // 전체 보석 종류 수

    const countMap = new Map(); // 현재 창 안의 "보석 종류 -> 개수"
    let kindsInWindow = 0; // 현재 창 안에 존재하는 "서로 다른 보석 종류 수"

    let left = 0;
    let minLength = Infinity;
    let answer = [1, n];

    for (let right = 0; right < n; right++) {
        const gem = gems[right];

        // ----- 새로 들어온 보석의 개수 갱신 -----
        countMap.set(gem, (countMap.get(gem) || 0) + 1);
        if (countMap.get(gem) === 1) kindsInWindow++; // "새로운 종류"가 처음 등장한 순간

        // ----- 창 안에 모든 종류가 다 모였다면, 왼쪽을 최대한 좁히기 시도 -----
        while (kindsInWindow === totalKinds) {
            // "현재 구간의 길이"가 지금까지의 최소보다 짧으면 갱신
            const currentLength = right - left + 1;
            if (currentLength < minLength) {
                minLength = currentLength;
                answer = [left + 1, right + 1]; // 1-indexed로 변환
            }

            // ----- 왼쪽 끝 보석을 창에서 빼보기 -----
            const leftGem = gems[left];
            countMap.set(leftGem, countMap.get(leftGem) - 1);
            if (countMap.get(leftGem) === 0) kindsInWindow--; // 그 종류가 창에서 완전히 사라짐

            left++; // 왼쪽 포인터를 오른쪽으로 이동
        }
    }
    return answer;
}
function solution(sticker) {
    const n = sticker.length;

    // ----- N = 1인 경우: 뜯을 스티커가 그 하나뿐이므로 바로 반환 -----
    if (n === 1) return sticker[0];

    // ----- 일직선 구간에서 "인접한 것끼리 뜯을 수 없을 때"의 최대값을 구하는 함수 -----
    const linearMax = (arr) => {
        let prevMax = 0; // "직전 칸까지의 최대값"   (i - 1)
        let prevPrevMax = 0; // "그 전전 칸까지의 최대값"    (i - 2)

        for (const value of arr) {
            const current = Math.max(prevMax, prevPrevMax + value); // 현재 칸을 뜯지 않거나 뜯는 경우 중 큰 값 선택
            prevPrevMax = prevMax;
            prevMax = current;
        }
        return prevMax; // 마지막 칸까지의 최대값 반환
    };

    // ----- 경우A: 마지막 스티커 제외(첫 번째 ~ 마지막-1) -----
    const caseExcludeLast = linearMax(sticker.slice(0, n - 1));

    // ----- 경우B: 첫 번째 스티커 제외(두 번째 ~ 마지막) -----
    const caseExcludeFirst = linearMax(sticker.slice(1));

    // ----- 두 경우 중 더 큰 값이 정답 -----
    return Math.max(caseExcludeLast, caseExcludeFirst);
}
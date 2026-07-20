function solution(h1, m1, s1, h2, m2, s2) {
    // ----- 시각을 초 단위 정수로 변환 -----
    const T1 = h1 * 3600 + m1 * 60 + s1;
    const T2 = h2 * 3600 + m2 * 60 + s2;

    // ----- 분수 k_min ≤ k ≤ k_max 형태를 오차 없이 정수로 계산하는 헬퍼 -----
    // "올림 나눗셈": ceil(num/denom), num과 denom은 항상 양의 정수
    const ceilDiv = (num, denom) => Math.floor((num + denom - 1) / denom);
    // "내림 나눗셈": floor(num/denom)
    const floorDiv = (num, denom) => Math.floor(num / denom);

    // ----- 초침-시침 겹침 횟수: t = 43200k/719가 [T1,T2] 안에 있는 k의 개수 -----
    // "43200k/719 ≥ T1" → "k ≥ 719*T1/43200" → k_min = ceil(719*T1/43200)
    // "43200k/719 ≤ T2" → "k ≤ 719*T2/43200" → k_max = floor(719*T2/43200)
    const hMin = ceilDiv(719 * T1, 43200);
    const hMax = floorDiv(719 * T2, 43200);
    const countH = Math.max(0, hMax - hMin + 1);

    // ----- 초침-분침 겹침 횟수: t = 3600k/59가 [T1,T2] 안에 있는 k의 개수 -----
    const mMin = ceilDiv(59 * T1, 3600);
    const mMax = floorDiv(59 * T2, 3600);
    const countM = Math.max(0, mMax - mMin + 1);

    // ----- 시침·분침·초침 동시 겹침(0시/12시 정각) 횟수: t = 43200n -----
    const tripleMin = ceilDiv(T1, 43200);
    const tripleMax = floorDiv(T2, 43200);
    const countTriple = Math.max(0, tripleMax - tripleMin + 1);

    // ----- 중복(삼중 겹침) 제거 후 합산 -----
    return countH + countM - countTriple;
}
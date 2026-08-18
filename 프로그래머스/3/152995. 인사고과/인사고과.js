function solution(scores) {
    const n = scores.length;
    const [wanhoA, wanhoB] = scores[0];

    // ----- 1. 원본 index를 유지한 채, a 내림차순 -> b 내림차순으로 정렬 -----
    const indexed = scores.map(([a, b], i) => ({ a, b, i }));
    const sorted = [...indexed].sort((x, y) => {
        if (x.a !== y.a) return y.a - x.a;
        return y.b - x.b;
    });

    // ----- 2. "모든 사원 각각"에 대해 인센티브 탈락 여부(eligible) 판정 -----
    /*
     같은 a값끼리는 "그룹"으로 묶어서 처리해야, 자기 그룹 안의 동료끼리는
      서로 탈락시키지 않으면서(둘 다 a가 같으므로), "그 이전(더 큰 a) 그룹들의 b 최대값"
      만으로 정확히 판정할 수 있음
    */
    const eligible = new Array(n).fill(true);
    let runningMaxB = -Infinity; // "지금까지의 그룹(더 큰 a)들 중 b의 최대값"

    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && sorted[j].a === sorted[i].a) j++; // 같은 a값 그룹 범위 찾기

        let groupMaxB = -Infinity;
        for (let k = i; k < j; k++) {
            const emp = sorted[k];
            // "더 큰 a를 가진 그룹 중에 b도 더 큰 사람이 있었다." -> 탈락
            if (runningMaxB > emp.b) {
                eligible[emp.i] = false;
            }
            groupMaxB = Math.max(groupMaxB, emp.b);
        }
        runningMaxB = Math.max(runningMaxB, groupMaxB); // 다음(더 작은 a) 그룹을 위해 갱신
        i = j;
    }

    // ----- 3. 완호 자신이 탈락하면 -1 -----
    if (!eligible[0]) return -1;

    // ----- 4. 석차 계산: "인센티브 대상자들 중" 완호보다 총점이 높은 사람 수 + 1 -----
    const wanhoTotal = wanhoA + wanhoB;
    let rank = 1;

    for (let idx = 1; idx < n; idx++) {
        const [a, b] = scores[idx];
        if (eligible[idx] && a + b > wanhoTotal) rank++;
    }

    return rank;
}
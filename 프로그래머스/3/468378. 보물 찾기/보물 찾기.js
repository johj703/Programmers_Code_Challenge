function solution(depth, money, excavate) {
    const w = depth.length;

    /* 
        1. index 전처리 
        입력 받은 depth는 0번부터 시작하므로, 열 번호(1~w)와 index를 똑같이 맞추기 위해
        맨 앞에 더미 값(0)을 붙여 1번 index가 1번 열의 비용이 되도록 전처리
    */
    const d = [0, ...depth];

    /*
        2. DP 테이블 및 최적 경로 choice 배열 초기화
        빈 구간(p=1일 때, p-1=0, p=w일 때 p+1=w+1) 접근 시 index 에러를 막기 위해서(w + 2) 크기로 세팅
   */
    const dp = Array.from({ length: w + 2 }, () => Array(w + 2).fill(0));
    const choice = Array.from({ length: w + 2 }, () => Array(w + 2).fill(0));

    // 3. 구간DP 연산 - 구간의 길이(len)를 1부터 w까지 차례대로 늘려나가며 테이블을 채우기
    for (let len = 1; len <= w; len++) {
        for (let l = 1; l <= w - len + 1; l++) {
            const r = l + len - 1;

            let minCost = Infinity;
            let bestP = -1;

            // l부터 r사이의 모든 열 p를 파보는 분기 시도
            for (let p = l; p <= r; p++) {
                // 점화식: 현재 파는 비용 d[p] + 최악의 시나리오 대비 Math.max(왼쪽 구간, 오른쪽 구간)
                const cost = d[p] + Math.max(dp[l][p - 1], dp[p + 1][r]);

                // 여러 p 후보 중 최악을 각오해도 비용이 가장 적게 깨지는 최소값 선택
                if (cost < minCost) {
                    minCost = cost;
                    bestP = p; // 최적의 파볼 열 위치를 기록
                }
            }

            dp[l][r] = minCost;
            choice[l][r] = bestP; // 최적의 위치 나침반을 박제
        }
    }

    // 4. 실시간 보물 추적 인터랙션 루프
    // l = 1, r = w 전체 구간에서 출발하여, excavate 결과에 따라 범위를 좁히기
    let l = 1;
    let r = w;

    while (l <= r) {
        // 미리 구해둔 choice 나침반에서 현재 구간 [l, r]의 최적의 파볼 열 p를 꺼내기
        const p = choice[l][r];

        // 문제에서 제공하는 excavate API를 호출해서 컴퓨터의 피드백을 받기
        const res = excavate(p);

        if (res === 0) {
            // 0을 받으면 보물을 찾았으므로 즉시 그 열 번호 p를 리턴하며 종료
            return p;
        } else if (res === -1) {
            // 보물이 왼쪽에 있으므로 오른쪽 경계 r을 바짝 좁히기(구간이 무조건 줄어들어 무한루프 방지)
            r = p - 1;
        } else if (res === 1) {
            // 보물이 오른쪽에 있으므로 왼쪽 경계 l을 바짝 좁히기(구간이 무조건 줄어들어 무한루프 방지)
            l = p + 1;
        }
    }
    return l; // 이론상 보물을 무조건 찾으므로 while 문 내부에서 100% 리턴이 됨!
}
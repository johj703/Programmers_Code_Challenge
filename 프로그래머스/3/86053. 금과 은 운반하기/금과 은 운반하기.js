function solution(a, b, g, s, w, t) {
    // 자바스크립트의 정밀도 한계 내에서 안전한 최상한선
    let lo = 0;
    let hi = 4 * 10 ** 14;

    // 이분 탐색(Parametric Search) 메인 루프
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);

        // mid 시간 안에 목표 자원을 다 나를 수 있는지 검증
        if (feasible(mid, a, b, g, s, w, t)) {
            hi = mid; // 가능하면 시간을 더 줄여 최소값을 탐색
        } else {
            lo = mid + 1; // 불가능하다면 시간이 더 필요하므로 lo범위를 올리기
        }
    }
    // lo === hi가 되는 임계점인 최단 시간 반환
    return lo;
}
// -----------------------------------------------------------------------------------------
// 헬퍼 함수 - 주어진 제한 시간 T 동안 트럭 한 대가 나를 수 있는 최대 무게를 구하는 함수
/*
    T: 주어진 제한 시간
    w: 트럭의 한 번당 최대 적재량 (w[i])
    t: 트럭의 편도 이동 시간 (t[i])
*/
function getMaxTruckCapacity(T, w, t) {
    // 예외 처리: 주어진 시간이 편도 시간보다도 적으면 아예 운반할 수 없음
    if (T < t) return 0;

    // 1. 완전한 왕복(t + 2)을 몇 번 할 수 있는지 구하기
    let moveCount = Math.floor(T / (t * 2));

    // 2. 왕복하고 남은 짜투리 시간을 계산
    const remainder = T % (t * 2);

    // 3. 힌트대로 남은 시간이 편도 시간(t) 이상이면, 돌아올 필요가 없으므로 1회 더 운반 가능
    if (remainder >= t) {
        moveCount++;
    }

    // 4. 총 운반 횟수에 한 번당 적재량을 곱해 최대 운반 가능 kg을 반환
    return moveCount * w;
}

// -----------------------------------------------------------------------------------------
// 핵심 판별 함수 - 특정 시간 T가 금 a와 은 b를 모두 충족하는 유효한 시간인지 검사
/*
    T: 검사할 시간
    a: 목표 금 무게, b: 목표 은 무게
    g: 금 매장량 배열, s: 은 매장량 배열
    w: 트럭 적재량 배열, t: 트럭 편도 시간 배열
*/
function feasible(T, a, b, g, s, w, t) {
    const n = g.length; // 도시의 개수

    let maxGold = 0; // 최대로 모을 수 있는 금의 총량
    let maxSilver = 0; // 최대로 모을 수 있는 은의 총량
    let maxTotal = 0; // 금과 은을 섞어서 최대로 모을 수 있는 실질적 총량

    for (let i = 0; i < n; i++) {
        // 이전에 완성한 트럭의 최대 운반 용량 계산 함수 호출
        const cap = getMaxTruckCapacity(T, w[i], t[i]);

        // 1. 금만 올인해서 가져올 때의 누적합
        maxGold += Math.min(cap, g[i]);

        // 2. 은만 올인해서 가져올 때의 누적합
        maxSilver += Math.min(cap, s[i]);

        // 3. 금과 은을 섞어서 실을 올 수 있는 실질적인 총합 누적
        // 트럭 용량(cap)과 그 도시의 전체 광물 매장량(g[i] + s[i]) 중 작은 값만큼만 가져올 수 있음
        maxTotal += Math.min(cap, g[i] + s[i]);
    }

    // 4. 세 가지 제약 조건을 동시에 모두 만족해야만 진짜로 '가능(true)'한 시간 T이다.
    if (maxGold >= a && maxSilver >= b && maxTotal >= a + b) {
        return true;
    }

    return false;
}
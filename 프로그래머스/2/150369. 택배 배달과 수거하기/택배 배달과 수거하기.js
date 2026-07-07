function solution(cap, n, deliveries, pickups) {
    let distance = 0;
    let dIdx = n - 1; // 배달 남은 가장 먼 집 포인터
    let pIdx = n - 1; // 수거 남은 가장 먼 집 포인터

    // 배달/수거가 모두 0인 집은 건너뛰기
    while (dIdx >= 0 && deliveries[dIdx] === 0) dIdx--;
    while (pIdx >= 0 && pickups[pIdx] === 0) pIdx--;

    while (dIdx >= 0 || pIdx >= 0) {
        // 이번 왕복 거리: 배달/수거 중 더 먼 집까지
        const farthest = Math.max(
            dIdx >= 0 ? dIdx + 1 : 0,
            pIdx >= 0 ? pIdx + 1 : 0,
        );
        distance += farthest * 2;

        // 뒤에서부터 cap개만큼 배달
        let dCap = cap;
        while (dIdx >= 0 && dCap > 0) {
            if (deliveries[dIdx] <= dCap) {
                dCap -= deliveries[dIdx];
                deliveries[dIdx] = 0;
                dIdx--;
            } else {
                deliveries[dIdx] -= dCap;
                dCap = 0;
            }
        }

        // 0인 집 건너뛰기
        while (dIdx >= 0 && deliveries[dIdx] === 0) dIdx--;

        // 뒤에서부터 cap개만큼 수거
        let pCap = cap;
        while (pIdx >= 0 && pCap > 0) {
            if (pickups[pIdx] <= pCap) {
                pCap -= pickups[pIdx];
                pickups[pIdx] = 0;
                pIdx--;
            } else {
                pickups[pIdx] -= pCap;
                pCap = 0;
            }
        }
        
        // 0인 집 건너뛰기
        while (pIdx >= 0 && pickups[pIdx] === 0) pIdx--;
    }

    return distance;
}
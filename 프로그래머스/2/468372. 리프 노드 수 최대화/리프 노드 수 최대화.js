function solution(dist_limit, split_limit) {
    // ----- 기본값: 분배를 전혀 안 해도 루트의 자식 1개는 항상 리프 -----
    let maxLeaves = 1;

    // ----- "2를 a번, 3을 b번" 오름차순으로 쓰는 모든 조합을 완전탐색 -----
    for (let a = 0; a <= 31; a++) {
        for (let b = 0; b <= 20; b++) {
            // ----- (a, b) 조합을 오름차순(2들 먼저, 3들 나중)으로 시뮬레이션 -----
            let P = 1; // 현재 레빌을 리프 후보 개수(= 분배도 값)
            let cost = 0; // 지금까지 사용한 분배 노드 수
            let valid = true;

            for (let i = 0; i < a; i++) {
                cost += P;
                P *= 2;
                if (P > split_limit || cost > dist_limit) {
                    valid = false;
                    break;
                }
            }
            if (!valid) break; // 2만으로 이미 초과하면 b를 늘려도 소용 없음

            for (let i = 0; i < b; i++) {
                cost += P;
                P *= 3;
                if (P > split_limit || cost > dist_limit) {
                    valid = false;
                    break;
                }
            }
            if (!valid) break; // 이 a에서 3를 더 늘려도 소용 없음

            // ----- 남은 예산(leftover)으로 마지막 부분 분배 시도 -----
            const leftover = dist_limit - cost;
            let total = P;

            if (leftover > 0) {
                /* "3을 우선 시도(더 많은 이득), 안되면 2" - 같은 leftover 사용 시
                 factor가 클수록 이득이 크기 때문 (gain = 사용개수 × (factor - 1)) */
                let f = 0;
                if (P * 3 <= split_limit) f = 3;
                else if (P * 2 <= split_limit) f = 2;

                if (f > 0) {
                    const k = Math.min(leftover, P); // 변환 가능한 노드의 수
                    total = P + k * (f - 1);
                }
            }
            if (total > maxLeaves) maxLeaves = total;
        }
    }

    return maxLeaves;
}
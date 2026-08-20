function solution(n, results) {
    // ----- win[i][j] = true: i가 j를 이겼다는게 확정됨(직접 또는 간접) -----
    const win = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(false),
    );

    // ----- 직접 대결 결과 먼저 반영 -----
    for (const [a, b] of results) {
        win[a][b] = true; // a가 b를 이김
    }

    // ----- 플로이드-워셜: k를 거쳐서 이기는 관계까지 전이적으로 전파 -----
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                // "i가 k를 이기고, k가 j를 이기면 -> i도 j를 이긴 것"
                if (win[i][k] && win[k][j]) {
                    win[i][j] = true;
                }
            }
        }
    }

    // ----- 각 선수별로 "순위 확정 가능 여부" 판정 -----
    let count = 0;

    for (let player = 1; player <= n; player++) {
        let relatedCount = 0; // "나와 승패 관계가 확정된 사람 수"

        for (let other = 1; other <= n; other++) {
            if (other === player) continue;
            // "내가 이겼거나(win[player][other]), 나를 이겼거나(win[other][player])"
            if (win[player][other] || win[other][player]) {
                relatedCount++;
            }
        }

        // "나를 제외한 전체(n-1)명 모두와 관계가 확정되면" 순위 확정 가능
        if (relatedCount === n - 1) count++;
    }
    return count;
}
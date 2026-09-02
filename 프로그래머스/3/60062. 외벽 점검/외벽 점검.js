function solution(n, weak, dist) {
    const len = weak.length;
    let answer = Infinity;

    // 반시계 방향은 원을 뒤집은 좌표계에서 시계방향으로 도는 것과 동일
    const weakCW = weak;
    const weakCCW = weak.map((w) => n - w).reverse();

    const permutations = getPermutations(dist);

    for (const w of [weakCW, weakCCW]) {
        for (let start = 0; start < len; start++) {
            // start번째 취약 지점을 기준(0)으로 삼아 상대 거리로 재구성
            const points = [];
            for (let i = 0; i < len; i++) {
                const idx = (start + i) % len;
                let pos = w[idx] - w[start];
                if (pos < 0) pos += n; // 원형 구조 보정
                points.push(pos);
            }

            for (const perm of permutations) {
                const used = countFriends(points, perm);
                if (used < answer) answer = used;
            }
        }
    }

    return answer === Infinity ? -1 : answer;
}

// 주어진 순서(distPerm)대로 친구를 투입했을 때, 모든 지점을 커버하는데 필요한 친구 수 계산
function countFriends(points, distPerm) {
    const len = points.length;
    let idx = 0; // 아진 점검 안 된 첫 지점의 index
    let count = 0; // 투입한 친구 수

    for (const d of distPerm) {
        if (idx >= len) break; // 이미 모든 지점 점검 완료
        const limit = points[idx] + d; // 이 친구가 커버할 수 있는 최대 위치
        count++;
        while (idx < len && points[idx] <= limit) idx++; // 커버되는 지점들을 건너뜀
    }

    return idx >= len ? count : Infinity; // 다 점검했으면 사용한 인원 수, 아니면 실패
}

// 배열의 모든 순열 생성
function getPermutations(arr) {
    if (arr.length <= 1) return [arr];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        for (const p of getPermutations(rest)) {
            result.push([arr[i], ...p]);
        }
    }
    return result;
}
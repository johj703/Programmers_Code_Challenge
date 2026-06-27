function solution(n, q, ans) {
    let count = 0;

    // 1 - n 중 5개를 고르는 모든 조합을 재귀로 생성
    const combination = (start, picked) => {
        if (picked.length === 5) {
            // 이 조합이 모든 시도(q)와 일치하는지 검증
            if (isValid(picked)) count++;
            return;
        }

        for (let i = start; i <= n; i++) {
            picked.push(i);
            combination(i + 1, picked);
            picked.pop(); // 백트래킹
        }
    };

    // 후보 조합이 모든 q, ans 조건을 만족하는지 확인
    const isValid = (candidate) => {
        const candidateSet = new Set(candidate);

        for (let i = 0; i < q.length; i++) {
            let matchCount = 0;
            for (const num of q[i]) {
                if (candidateSet.has(num)) matchCount++;
            }
            if (matchCount !== ans[i]) return false; // 하나라도 다르면 탈락
        }
        return true;
    };

    combination(1, []);
    return count;
}
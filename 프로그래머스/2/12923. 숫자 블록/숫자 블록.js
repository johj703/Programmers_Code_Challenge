function solution(begin, end) {
    const N = 10000000; // 설치된 블록의 최대 번호

    // 위치 i에 깔리는 블록 번호 계산
    const getBlock = (i) => {
        if (i < 2) return 0; // 0번 위치는 항상 0

        // n ≤ N 조건을 만족하려면 m ≥ i/N 이어야 함!
        const T = Math.max(2, Math.ceil(i / N));

        let best = i; // 기본값: m=i(즉, n=1, i가 소수인 경우)

        // m을 sqrt(i)까지만 탐색해도
        // m과 짝꿍인 (i / m)을 같이 확인하면 모든 약수를 커버 가능!
        for (let m = 2; m * m <= i; m++) {
            if (i % m === 0) {
                const other = i / m; // m의 짝꿍 약수

                // m, other 둘 다 후보로 검토 (조건: T 이상, 더 작은 값일 때 갱신)
                if (m >= T && m < best) best = m;
                if (other >= T && other < best) best = other;
            }
        }
        // 최종적으로 가장 작은 유효한 m으로 n=i/m 계산
        return i / best;
    };

    const answer = [];
    for (let i = begin; i <= end; i++) {
        answer.push(getBlock(i));
    }
    return answer;
}
function solution(k, ranges) {
    // 1. 우박수열 생성
    const seq = [k];
    while (k !== 1) {
        if (k % 2 === 0) k /= 2;
        else k = k * 3 + 1;
        seq.push(k);
    }

    const n = seq.length - 1; // 1이 될 때까지의 횟수

    // 2. 누적 넓이 계산 (Prefix Sum)
    // prefix[i] = x=0부터 x=i 까지의 넓이
    const prefix = [0];
    for (let i = 0; i < n; i++) {
        const area = (seq[i] + seq[i + 1]) / 2; // 사다리꼴 넓이
        prefix.push(prefix[i] + area);
    }

    // 3. 각 구간에 대해 정적분 계산
    return ranges.map(([a, b]) => {
        const end = n + b; // 실제 끝점(b는 0 이하이므로 n에서 빼기)

        // 유효하지 않은 구간 (시작점 > 끝점)
        if (a > end) return -1;

        return prefix[end] - prefix[a];
    });
}
function solution(n, cores) {
    const coreCount = cores.length;

    /*
        g(T) = 시각 T까지 이루어진 전체 작업 배정 개수.
        각 코어는 시각 0에 1번, 이후 core[i]의 배수 시각마다 한 번씩 배정 받으므로
        coreCount(초기 배정) + 각 코어의 ⌊T/core[i]⌋(추가 배정 횟수)의 합으로 계산한다.
        T가 음수(-1)로 들어오는 경우도 Math.floor가 음의 무한대 방향으로 내림하므로 자연스럽게 0을 반환해 처리된다.
    */
    function countAssignedBy(T) {
        let total = coreCount;
        for (const c of cores) {
            total += Math.floor(T / c);
        }
        return total;
    }

    // 이분 탐색: g(T) >= n을 만족하는 최소 T 찾기
    let lo = 0;
    let hi = Math.min(...cores) * n; // 가장 빠른 코어 혼자서도 n개를 처리할 수 있는 시각이므로 안전한 상한

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (countAssignedBy(mid) >= n) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    const T = lo;
    const prevCount = countAssignedBy(T - 1); // T 이전까지 이미 배정된 개수
    let remaining = n - prevCount; // 시각 T에 배정되는 코어들 중 몇 번째인지

    // 시각 T에 배정이 이루어지는 코어(처리시간의 배수인 코어)를 인덱스 순서대로 세어가며 remaining번째를 찾음
    for (let i = 0; i < coreCount; i++) {
        if (T % cores[i] === 0) {
            remaining--;
            if (remaining === 0) return i + 1; // 1번부터 시작하는 코어 번호로 반환
        }
    }

    return -1; // 문제 조건상 도달하지 않음(항상 답이 존재)
}
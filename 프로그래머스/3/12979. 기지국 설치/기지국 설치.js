function solution(n, stations, w) {
    const range = 2 * w + 1; // 기지국 하나가 커버할 수 있는 최대 길이
    let answer = 0;
    let coveredUpTo = 0; // "여기까지는 이미 전파가 커버됐다."는 위치(0부터 시작, 1번 아파트 이전)

    for (const station of stations) {
        // ----- 이 기지국이 커버하는 실제 범위(전체 아파트 범위를 벗어나지 않게) -----
        const start = station - w;
        const end = station + w;

        // ----- 아직 커버 안 된 구간이 있다면(coveredUpTo와 start 사이) -----
        if (start > coveredUpTo + 1) {
            const gap = start - 1 - coveredUpTo; // 빈 구간의 길이
            answer += Math.ceil(gap / range); // 빈 구간을 메우는 데 필요한 기지국 수
        }

        // ----- 커버 범위 갱신(더 뒤로 밀린 경우만) -----
        coveredUpTo = Math.max(coveredUpTo, end);
    }

    // ----- 마지막 기지국 이후, N번 아파트까지 남은 빈 구간 처리 -----
    if (coveredUpTo < n) {
        const gap = n - coveredUpTo; // 마지막 빈 구간의 길이
        answer += Math.ceil(gap / range); // 빈 구간을 메우는 데 필요한 기지국 수
    }

    return answer;
}
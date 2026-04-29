function solution(d, budget) {
    // 신청 금액을 오름차순으로 정렬
    d.sort((a, b) => a - b);

    let total = 0; // 현재까지 사용한 예산
    let count = 0; // 지원한 부서 수

    for (let i = 0; i < d.length; i++) {
        // 현재 부서를 지원할 수 있는지 확인
        if (total + d[i] <= budget) {
            total += d[i];
            count++;
        } else {
            // 예산 초과하면 종료
            break;
        }
    }

    return count;
}
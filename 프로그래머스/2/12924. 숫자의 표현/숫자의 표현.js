function solution(n) {
    let count = 0;

    // 시작 위치를 1부터 n까지 순회
    for (let start = 1; start <= n; start++) {
        let sum = 0;

        // start부터 시작하여 연속된 자연수들의 합 계산
        for (let k = start; k <= n; k++) {
            sum += k;

            if (sum === n) {
                count++;
                break;
            } else if (sum > n) {
                break; // 이미 n을 초과했으므로 더 이상 볼 필요 없음
            }
        }
    }

    return count;
}
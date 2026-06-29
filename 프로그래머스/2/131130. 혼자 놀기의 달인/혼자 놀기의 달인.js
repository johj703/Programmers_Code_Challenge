function solution(cards) {
    const n = cards.length;
    const visited = Array(n).fill(false);
    const cycleSizes = [];

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;

        // i부터 시작해서 사이클 따라가며 크기 측정
        let size = 0;
        let cur = i;
        while (!visited[cur]) {
            visited[cur] = true;
            size++;
            cur = cards[cur] - 1; // 카드 번호는 1 - indexed -> 0 - indexed로 변환
        }
        cycleSizes.push(size);
    }

    // 사이클이 2개 미만이면 점수 0 (곱할 두 번째 그룹이 없음)
    if (cycleSizes.length < 2) return 0;

    // 사이클 크기 내림차순 정렬 후 가장 큰 두 개 곱하기
    cycleSizes.sort((a, b) => b - a);
    return cycleSizes[0] * cycleSizes[1];
}
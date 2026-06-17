function solution(n) {
    const result = [];

    // from: 출발 기둥, to: 도착 기둥, via: 보조 기둥
    const hanoi = (n, from, to, via) => {
        // 종료 조건: 원판 1개는 바로 이동
        if (n === 1) {
            result.push([from, to]);
            return;
        }

        // 1. n-1개를 from -> via로 이동 (to를 보조로)
        hanoi(n - 1, from, via, to);

        // 2. 가장 큰 원판을 from -> to로 이동
        result.push([from, to]);

        // 3. n-1개를 via -> to로 이동 (from을 보조로)
        hanoi(n - 1, via, to, from);
    };

    hanoi(n, 1, 3, 2);
    return result;
}
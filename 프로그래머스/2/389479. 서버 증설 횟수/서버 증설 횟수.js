function solution(players, m, k) {
    let result = 0;
    let running = 0; // 현재 운영 중인 서버 수
    const added = Array(24).fill(0); // 각 시간대에 증설된 서버 수

    for (let i = 0; i < 24; i++) {
        // 1. k시간 전에 증설된 서버 반납
        if (i >= k) {
            running -= added[i - k];
        }

        // 2. 현재 필요한 서버 수
        const needed = Math.floor(players[i] / m);

        // 3. 부족한 만큼 증설
        if (needed > running) {
            const add = needed - running;
            added[i] = add; // 이 시간대에 증설된 수 기록
            running += add; // 운영 중인 서버 증가
            result += add; // 증설 횟수 누적
        }
    }

    return result;
}
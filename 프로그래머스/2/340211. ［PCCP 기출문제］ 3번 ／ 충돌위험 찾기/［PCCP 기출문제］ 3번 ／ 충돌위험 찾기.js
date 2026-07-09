function solution(points, routes) {
    // 각 로봇의 시간별 위치 배열 생성
    const robotPaths = routes.map((route) => {
        const positions = [];

        // 시작 포인트 위치
        let [r, c] = points[route[0] - 1];
        positions.push([r, c]); // t = 0 위치

        // 각 포인트로 이동
        for (let i = 1; i < route.length; i++) {
            const [tr, tc] = points[route[i] - 1];

            // r 좌표 먼저 이동
            while (r !== tr) {
                r += r < tr ? 1 : -1;
                positions.push([r, c]);
            }
            // c 좌표 나중에 이동
            while (c !== tc) {
                c += c < tc ? 1 : -1;
                positions.push([r, c]);
            }
        }

        return positions; // positions[t] = t초의 위치
    });

    // 전체 시간 중 가장 긴 경로 기준
    const maxTime = Math.max(...robotPaths.map((p) => p.length));

    let danger = 0;

    // 매 시간마다 위치 충돌 체크
    for (let t = 0; t < maxTime; t++) {
        const posMap = new Map();

        for (const path of robotPaths) {
            if (t >= path.length) continue; // 이미 운송 완료한 로봇 제외

            const [r, c] = path[t];
            const key = `${r}, ${c}`;
            posMap.set(key, (posMap.get(key) || 0) + 1);
        }

        // 같은 위치에 2대 이상이면 위험
        for (const count of posMap.values()) {
            if (count >= 2) danger++;
        }
    }

    return danger;
}
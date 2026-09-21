function solution(numbers) {
    /*
        키패드 좌표 (row, col)
        1 2 3
        4 5 6
        7 8 9
        * 0 #
        (여기서는 숫자만 다루므로 *, # 좌표는 생략)
    */
    // posOf: position of, 각 숫자의 [row, col] 좌표
    const posOf = {
        '1': [0, 0],
        '2': [0, 1],
        '3': [0, 2],
        '4': [1, 0],
        '5': [1, 1],
        '6': [1, 2],
        '7': [2, 0],
        '8': [2, 1],
        '9': [2, 2],
        '0': [3, 1],
    };

    /*
        두 버튼 a, b 사이를 한 손가락으로 이동해 누르는 최소 가중치.
        - 같은 버튼이면 1 (제자리 누름)
        - 다르면 대각선 이동(가중치 3)을 최대한 쓰고, 남는 거리는 상하좌우 이동(가중치 2)으로 채우는 것이
        항상 최적 경로 (대각선 1칸 = 가로 + 세로 1칸씩을 가중치 3에 처리 -> 가중치 2씩 두 번(4)보다 항상 이득)
    */
    const cost = (a, b) => {
        if (a === b) return 1;
        const [r1, c1] = posOf[a];
        const [r2, c2] = posOf[b];
        const dr = Math.abs(r1 - r2);
        const dc = Math.abs(c1 - c2);
        const diagonalSteps = Math.min(dr, dc);
        const straightSteps = Math.abs(dr - dc);
        return diagonalSteps * 3 + straightSteps * 2;
    };

    const INF = Infinity;
    const digits = '0123456789'.split('');

    let dpL = Object.fromEntries(digits.map((d) => [d, INF]));
    let dpR = Object.fromEntries(digits.map((d) => [d, INF]));

    const first = numbers[0];
    if (first !== '6') dpL['6'] = cost('4', first); // 왼손 4 -> first, 오른손은 6에 대기
    if (first !== '4') dpL['4'] = cost('6', first); // 오른손 6 -> first, 왼손은 4에 대기

    for (let i = 1; i < numbers.length; i++) {
        const cur = numbers[i];
        const prev = numbers[i - 1];
        const nextL = Object.fromEntries(digits.map((d) => [d, INF]));
        const nextR = Object.fromEntries(digits.map((d) => [d, INF]));

        for (const p of digits) {
            /* 이전 상태: 왼손 = prev, 오른손 = p */
            if (dpL[p] < INF) {
                if (cur !== p) {
                    // 오른손이 그 자리가 아니면 왼손으로 이동 가능
                    nextL[p] = Math.min(nextL[p], dpL[p] + cost(prev, cur));
                }
                if (cur !== prev) {
                    // 왼손이 그 자리가 아니면 오른손으로 이도 가능
                    nextR[prev] = Math.min(nextR[prev], dpL[p] + cost(p, cur));
                }
            }

            /* 이전 상태: 오른손 = prev, 왼손 = p */
            if (dpR[p] < INF) {
                if (cur !== p) {
                    nextR[p] = Math.min(nextR[p], dpR[p] + cost(prev, cur));
                }
                if (cur !== prev) {
                    nextL[prev] = Math.min(nextL[prev], dpR[p] + cost(p, cur));
                }
            }
        }
        dpL = nextL;
        dpR = nextR;
    }

    let answer = INF;
    for (const d of digits) {
        answer = Math.min(answer, dpL[d], dpR[d]);
    }
    return answer;
}
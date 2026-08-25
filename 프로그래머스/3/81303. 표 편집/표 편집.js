function solution(n, k, cmd) {
    // prev[i], next[i]: i번 행의 바로 위/아래 행 번호 (경계는 -1, n으로 표현)
    const prev = new Int32Array(n);
    const next = new Int32Array(n);
    for (let i = 0; i < n; i++) {
        prev[i] = i - 1;
        next[i] = i + 1; // 마지막 행의 next는 n (표의 범위를 벗어난 가상의 위치)
    }

    let cur = k;
    const deletedStack = []; // 삭제된 행 번호를 순서대로 저장 (Z에서 최근 것부터 꺼내 씀)
    const isDeleted = new Uint8Array(n);

    for (const command of cmd) {
        const [op, xStr] = command.split(' ');

        if (op === 'U') {
            let x = Number(xStr);
            while (x-- > 0) cur = prev[cur];
        } else if (op === 'D') {
            let x = Number(xStr);
            while (x-- > 0) cur = next[cur];
        } else if (op === 'C') {
            deletedStack.push(cur);
            isDeleted[cur] = 1;

            const p = prev[cur];
            const nx = next[cur];

            // 양 옆 행끼리 서로 연결 (cur 자신의 prev/next는 건드리지 않고 남겨둠 -> 복구용)
            if (p >= 0) next[p] = nx;
            if (nx < n) prev[nx] = p;

            // 삭제된 행이 마지막 행이면 윗 행(p)을, 아니면 이랫 행(nx)을 선택
            cur = nx < n ? nx : p;
        } else {
            // 'Z'
            const idx = deletedStack.pop();
            isDeleted[idx] = 0;

            const p = prev[idx];
            const nx = next[idx];

            // idx가 기억하고 있던 원래 이웃들이 다시 idx를 가리키도록 복구
            if (p >= 0) next[p] = idx;
            if (nx < n) prev[nx] = idx;
        }
    }

    let result = '';
    for (let i = 0; i < n; i++) {
        result += isDeleted[i] ? 'X' : 'O';
    }
    return result;
}
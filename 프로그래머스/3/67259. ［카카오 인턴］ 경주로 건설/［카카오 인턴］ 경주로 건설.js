function solution(board) {
    const n = board.length;
    // "0=위, 1=오른쪽, 2=아래, 3=왼쪽" 순서로 방향 정의
    const dRow = [-1, 0, 1, 0];
    const dCol = [0, 1, 0, -1];

    // ----- 최소 힙 구현 -----
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        push(item) {
            this.heap.push(item);
            let idx = this.heap.length - 1;
            while (idx > 0) {
                const parentIdx = (idx - 1) >> 1;
                if (this.heap[parentIdx][0] <= this.heap[idx][0]) break;
                [this.heap[parentIdx], this.heap[idx]] = [
                    this.heap[idx],
                    this.heap[parentIdx],
                ];
                idx = parentIdx;
            }
        }
        pop() {
            const top = this.heap[0];
            const last = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = last;
                let idx = 0;
                while (true) {
                    const left = idx * 2 + 1,
                        right = idx * 2 + 2;
                    let smallest = idx;
                    if (
                        left < this.heap.length &&
                        this.heap[left][0] < this.heap[smallest][0]
                    )
                        smallest = left;
                    if (
                        right < this.heap.length &&
                        this.heap[right][0] < this.heap[smallest][0]
                    )
                        smallest = right;
                    if (smallest === idx) break;
                    [this.heap[smallest], this.heap[idx]] = [
                        this.heap[idx],
                        this.heap[smallest],
                    ];
                    idx = smallest;
                }
            }
            return top;
        }
        get size() {
            return this.heap.length;
        }
    }

    // ----- dist[r][c][d] = (r, c)에 방향 d로 도착했을 때의 최소 비용 -----
    const dist = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => new Array(4).fill(Infinity)),
    );

    const heap = new MinHeap();

    // ----- 시작점(0, 0)에서 첫 이동은 "방향 전환 개념이 없으므로" 모두 직선 도로(100원)로 시작 -----
    for (let d = 0; d < 4; d++) {
        const nr = 0 + dRow[d];
        const nc = 0 + dCol[d];
        if (nr >= 0 && nr < n && nc >= 0 && nc < n && board[nr][nc] === 0) {
            if (100 < dist[nr][nc][d]) {
                dist[nr][nc][d] = 100;
                heap.push([100, nr, nc, d]);
            }
        }
    }

    // ----- 다익스트라 진행 -----
    while (heap.size > 0) {
        const [cost, r, c, d] = heap.pop();

        if (cost > dist[r][c][d]) continue; // 이미 더 나은 값을로 갱신된 stale 상태는 건너뜀

        // 도착점을 "처음" 꺼내는 순간이 곧 최소 비용(다익스트라 성질)
        if (r === n - 1 && c === n - 1) return cost;

        for (let nd = 0; nd < 4; nd++) {
            const nr = r + dRow[nd];
            const nc = c + dCol[nd];

            if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
            if (board[nr][nc] === 1) continue;

            // "방향이 같으면 직선(100원), 다르면 코너 포함(600원)"
            const moveCost = nd === d ? 100 : 600;
            const newCost = cost + moveCost;

            if (newCost < dist[nr][nc][nd]) {
                dist[nr][nc][nd] = newCost;
                heap.push([newCost, nr, nc, nd]);
            }
        }
    }

    // ----- (안전장치) 혹시 위에서 못 찾았을 경우 도착점의 최소값을 반환 -----
    return Math.min(...dist[n - 1][n - 1]);
}
function solution(alp, cop, problems) {
    // 목표: 모든 문제의 요구 알고력/코딩력 중 최대값까지만 도달하면 충분함
    let maxAlp = alp;
    let maxCop = cop;
    for (const [alpReq, copReq] of problems) {
        maxAlp = Math.max(maxAlp, alpReq);
        maxCop = Math.max(maxCop, copReq);
    }

    // dp[a][c]: 알고력 a, 코딩력 c에 도달하는 최소 시간
    const dp = Array.from({ length: maxAlp + 1 }, () =>
        new Array(maxCop + 1).fill(Infinity),
    );
    const startA = Math.min(alp, maxAlp);
    const startC = Math.min(cop, maxCop);
    dp[startA][startC] = 0;

    /*
        배열 기반 이진 힙(최소 힙)으로 우선순위 큐를 직접 구현한다.
        자바스크립트에는 내장 우선순위 큐가 없으므로, 다익스트라 성능을 위해
        "지금까지의 시간이 가장 작은 상태"를 O(log V)에 꺼낼 수 있도록 한다.
    */
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        push(item) {
            this.heap.push(item);
            this._bubbleUp(this.heap.length - 1);
        }
        pop() {
            const top = this.heap[0];
            const last = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = last;
                this._bubbleDown(0);
            }
            return top;
        }
        get size() {
            return this.heap.length;
        }
        _bubbleUp(idx) {
            /*
      새로 넣은 원소(idx)가 부모(parent)보다 작으면 서로 자리를 바꾸고,
      idx를 부모의 위치로 옮겨서 계속 위로 올라가며 같은 비교를 반복한다.
      (idx = parent를 빼먹으면, 같은 자리에서 계속 같은 비교만 하다가
      한 단계만 올라가고 멈춰버리는 조용한 버그가 생긴다 - 오늘 실제로 겪은 실수)
    */
            while (idx > 0) {
                const parent = (idx - 1) >> 1;
                if (this.heap[parent][0] <= this.heap[idx][0]) break;
                [this.heap[parent], this.heap[idx]] = [
                    this.heap[idx],
                    this.heap[parent],
                ];
                idx = parent;
            }
        }
        _bubbleDown(idx) {
            /*
      현재 위치(idx)의 값이 두 자식(left, right) 중 더 작은 값보다 크면,
      그 자식과 자리를 바꾸고 idx를 그 자식의 위치로 옮겨서 계속 아래로 내려간다.
      더 이상 바꿀 필요가 없으면(smallest === idx) 반복을 멈춘다.
    */
            const size = this.heap.length;
            while (true) {
                let smallest = idx;
                const left = 2 * idx + 1;
                const right = 2 * idx + 2;
                if (left < size && this.heap[left][0] < this.heap[smallest][0])
                    smallest = left;
                if (
                    right < size &&
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
    }

    const pq = new MinHeap();
    pq.push([0, startA, startC]);
    const visited = Array.from({ length: maxAlp + 1 }, () =>
        new Array(maxCop + 1).fill(false),
    );

    while (pq.size > 0) {
        const [time, a, c] = pq.pop();
        if (visited[a][c]) continue;
        visited[a][c] = true;

        // (1) 알고력 공부
        if (a < maxAlp) {
            const na = a + 1;
            if (time + 1 < dp[na][c]) {
                dp[na][c] = time + 1;
                pq.push([time + 1, na, c]);
            }
        }

        // (2) 코딩력 공부
        if (c < maxCop) {
            const nc = c + 1;
            if (time + 1 < dp[a][nc]) {
                dp[a][nc] = time + 1;
                pq.push([time + 1, a, nc]);
            }
        }

        // (3) 조건을 만족하는 문제 풀기
        for (const [alpReq, copReq, alpRwd, copRwd, cost] of problems) {
            if (a >= alpReq && c >= copReq) {
                const na = Math.min(a + alpRwd, maxAlp);
                const nc = Math.min(c + copRwd, maxCop);
                if (time + cost < dp[na][nc]) {
                    dp[na][nc] = time + cost;
                    pq.push([time + cost, na, nc]);
                }
            }
        }
    }

    return dp[maxAlp][maxCop];
}
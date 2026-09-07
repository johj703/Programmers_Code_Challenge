function solution(n, paths, gates, summits) {
    /*
        인접 리스트로 그래프를 구성한다.
        각 노드마다 [아웃 노드, 간선 가중치] 쌍의 배열을 저장해, 다익스트라 탐색 시 빠르게 이웃을 확인할 수 있도록 한다.
    */
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of paths) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    const isSummit = new Uint8Array(n + 1);
    for (const s of summits) isSummit[s] = 1;

    const dist = new Array(n + 1).fill(Infinity);
    const visited = new Uint8Array(n + 1);

    /*
     배열 기반 이진 힙(binary heap)으로 우선순위 큐를 직접 구현한다.
     자바스크립트에는 내장 우선순위 큐가 없으므로, 다익스트라 성능을 위해 최소 힙을 구성해
     매번 "현재까지 기록된 거리 중 가장 작은 노드"를 O(log n)에 꺼낼 수 있도록 한다.
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

    // 모든 출입구를 동시에 시작점(거리 0)으로 등록
    for (const g of gates) {
        dist[g] = 0;
        pq.push([0, g]);
    }

    const summitDist = {}; // 각 산봉우리가 최초로 확정된 시점의 거리(intensity) 기록

    while (pq.size > 0) {
        const [d, u] = pq.pop();
        if (visited[u]) continue;
        visited[u] = 1;

        if (isSummit[u]) {
            // 산봉우리에 도달했다면 거리만 기록하고, 이 노드에서는 더 이상 확장하지 않음
            summitDist[u] = d;
            continue;
        }

        for (const [v, w] of graph[u]) {
            if (visited[v]) continue;
            const newDist = Math.max(d, w); // 합이 아니라 "경로 위 최대 가중치" 기준으로 갱신
            if (newDist < dist[v]) {
                dist[v] = newDist;
                pq.push([newDist, v]);
            }
        }
    }

    // 산봉우리들 중 거리가 최소인 것을 찾고, 동점이면 번호가 낮은 것을 선택
    let bestSummit = -1;
    let bestDist = Infinity;
    for (const s of summits) {
        if (summitDist[s] === undefined) continue;
        if (
            summitDist[s] < bestDist ||
            (summitDist[s] === bestDist && s < bestSummit)
        ) {
            bestDist = summitDist[s];
            bestSummit = s;
        }
    }

    return [bestSummit, bestDist];
}